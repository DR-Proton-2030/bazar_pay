import { Request, Response } from "express";
import BookModel from "../../../../models/book.model";
import { MESSAGE } from "../../../../constants/message";
import ForwardedEnquiryModel from "../../../../models/forwardedEnquiry.model";
import AdminAssignedProjectModel from "../../../../models/adminAssignedProject.model";
import LayoutModel from "../../../../models/layout.model";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body;

    const bookingInstance = await new BookModel(bookingData).save();

    res.status(200).json({
      message: MESSAGE.post.succ,
      result: bookingInstance,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const filter: any = req.query;
    const currentPage = parseInt(String(filter.page || "1"));
    const limit = 5;
    const startIndex = (currentPage - 1) * limit;
    const sortField = filter.sortField ? filter.sortField : "updatedAt";

    delete filter.page;
    delete filter.sortField;

    const totalCount = await BookModel.countDocuments(filter);

    const bookings = await BookModel.find(filter)
      .populate("customer project plot builder")
      .sort({ [sortField]: -1 })
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      message: MESSAGE.get.succ,
      pagination: {
        total: totalCount,
        currentPage: currentPage,
      },
      result: bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};

export const updateEnquiryStatus = async (req: Request, res: Response) => {
  try {
    const { enquiry_object_id, plot_object_id, status } = req.body;
    const response = await BookModel.findByIdAndUpdate(enquiry_object_id, {
      $set: { enqury_status: status },
    });
    if(status === "BOOKED"){
      await LayoutModel.findByIdAndUpdate(plot_object_id,{
        $set: {
          is_booked: true,
        },
      })
    }
    if (response) {
      return res.status(200).json({
        message: MESSAGE.patch.succ,
        result: response
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.patch.fail,
    });
  }
};

export const forwardEnquryStatus = async (req: Request, res: Response) => {
  try {
    const forwardedPayload = req.body;

    const existingBooking = await ForwardedEnquiryModel.find(forwardedPayload);

    if (existingBooking.length>0) {
      return res.status(409).json({
        message: MESSAGE.post.sameEntry,
      });
    }

    await BookModel.findByIdAndUpdate(forwardedPayload.enquiry_object_id,{$set:{enqury_status:"FORWARDED"}})

    const adminObjecIdList = await AdminAssignedProjectModel.find({project_object_id: forwardedPayload.project_object_id},{admin_object_id:1});

    let payloadList =[]
    if(adminObjecIdList.length!==0){
      payloadList = adminObjecIdList.map((admin, i) => {
        return {...forwardedPayload, forwarded_to: admin.admin_object_id};
      });
    }
    else{
      payloadList =[
        {...forwardedPayload, forwarded_to: null}
      ]
    }


    const forwardedBookingInstance = await ForwardedEnquiryModel.insertMany(payloadList)

    return res.status(200).json({
      message: MESSAGE.post.succ,
      result: forwardedBookingInstance,
    });
  } catch (error) {
    res.status(400).json({
      message: MESSAGE.post.succ,
    });
  }
};

export const getForwardedEnquryList = async (req: Request, res: Response) => {
  try {
    const filter: any = req.query;
    const currentPage = parseInt(String(filter.page || "1"));
    const limit = 5;
    const startIndex = (currentPage - 1) * limit;
    const sortField = filter.sortField ? filter.sortField : "updatedAt";

    delete filter.page;
    delete filter.sortField;

    const totalCount = await ForwardedEnquiryModel.countDocuments(filter);

    console.log("===> enqury", filter);

    const enquries = await ForwardedEnquiryModel.find(filter)
      .populate("builder project plot book customer forwarded_by_details forwarded_to_details builder")
      .sort({ [sortField]: -1 })
      .skip(startIndex)
      .limit(limit);

      console.log("===>list",enquries);

    res.status(200).json({
      message: MESSAGE.get.succ,
      pagination: {
        total: totalCount,
        currentPage: currentPage,
      },
      result: enquries,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};
