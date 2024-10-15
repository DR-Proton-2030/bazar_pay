import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete, { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { api } from "../../../utils/api";

const PAGE_SIZE = 1; // Adjust the page size as needed

interface CategoryAutoCompleteProps {
  setCategoryId: (id: string | null) => void;
  
}

const CategoryAutoComplete: React.FC<CategoryAutoCompleteProps> = ({ setCategoryId }) => {
  interface Category {
    _id: string;
    name: string;
  }

  interface Subcategory {
    _id: string;
    name: string;
  }
  
  const [options, setOptions] = useState<Category[]>([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");

  const defProps = {
    options: options,
    getOptionLabel: (option: Category) => `${option.name}`,
  };

  const getData = (data: Category | null) => {
    console.log(data?._id);
    setCategoryId(data?._id ?? null);
  };

  const getCategoryList = async (search = "", page = 1) => {
    setLoading(true);
    const filter = {
      page,
      
      ...(search && { name: { $regex: `^${search}`, $options: "i" } }),
    };
    try {
      const response = await api.category.getCategory(filter);
      setOptions((prevOptions) => [...prevOptions, ...response.result]);
      setHasMore(response.result.length === PAGE_SIZE); // Check if more data is available
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSubcategoryList = async (search = "", page = 1) => {
    setLoading(true);
    if(selectedCategory) 
        try {
            const filter = {
                page,
                category_object_id: selectedCategory._id,
                ...(search && { name: { $regex: `^${search}`, $options: "i" } }),
              };

              const response = await api.subcategory.getSubcategory(filter);
      setOptions((prevOptions) => [...prevOptions, ...response.result]);
      setHasMore(response.result.length === PAGE_SIZE); // Check if more data is available
    }
    
    
    catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const bottom = target.scrollHeight === target.scrollTop + target.clientHeight;
    if (bottom && hasMore && !loading) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        getCategoryList(searchQuery, newPage);
        return newPage;
      });
    }
  };

  useEffect(() => {
    getCategoryList(searchQuery, page);
  }, [searchQuery, page]);


  useEffect(() => {
    getSubcategoryList(searchQuery, page)
  }, [searchQuery, page]);
  return (
    //autocomplete for category
    <>
    <Autocomplete
      sx={{ width: "500px" }}
      {...defProps}
      onChange={(event, value) => setSelectedCategory(value)}
      onInputChange={(event, value) => setSearchQuery(value)}
      renderInput={(params) => (
        <TextField {...params} label="Choose category" variant="outlined" />
      )}
      onScroll={handleScroll}
      ListboxProps={{
        onScroll: handleScroll,
      }}
      loading={loading}
    />

   
    {/* <Autocomplete
         options={subcategories}
         getOptionLabel={(option) => option.name}
         onChange={(event, value) => setSelectedSubcategory(value)}
         renderInput={(params) => <TextField {...params} label="Select Subcategory" />}
         disabled={!selectedCategory} 
         onScroll={handleScroll}
         ListboxProps={{
           onScroll: handleScroll,
         }}
         loading={loading} 
    /> */}
    </>
  );
};

export default CategoryAutoComplete;

// import React, { useState, useEffect } from 'react';
// import { Autocomplete, TextField } from '@mui/material';
// import axios from 'axios'; // Or your preferred HTTP client
// import { api } from '../../../utils/api';

// const PAGE_SIZE = 1;

// interface Category {
//     id: string;
//     name: string;
// }

// interface Subcategory {
//     id: string;
//     name: string;
// }

// const CategoriesAndSubcategories = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
//   const [page, setPage] = useState(1);
//  const [loading, setLoading] = useState(false);
// const [hasMore, setHasMore] = useState(true);
//  const [searchQuery, setSearchQuery] = useState("");

//   const queryParams = new URLSearchParams(window.location.search);
//   const categoryId = queryParams.get("cid");


//   const getCategoryList = async (search = "", page = 1) => {
//          setLoading(true);
//          const filter = {
//            page,
          
//            ...(search && { name: { $regex: `^${search}`, $options: "i" } }),
//          };
//          try {
//            const response = await api.category.getCategory(filter);
//            setCategories((prevOptions) => [...prevOptions, ...response.result]);
//            setHasMore(response.result.length === PAGE_SIZE); // Check if more data is available
//          } catch (error) {
//            console.log(error);
//          } finally {
//            setLoading(false);
//          }
//      };
    

//   const handleScroll = (event: React.UIEvent<HTMLElement>) => {
//          const target = event.target as HTMLElement;
//          const bottom = target.scrollHeight === target.scrollTop + target.clientHeight;
//          if (bottom && hasMore && !loading) {
//            setPage((prevPage) => {
//              const newPage = prevPage + 1;
//              getCategoryList(searchQuery, newPage);
//              return newPage;
//            });
//          }
//       };
//       useEffect(() => {
//              getCategoryList(searchQuery, page);
//           }, [searchQuery, page]);
    
//   // Fetch categories on component mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await api.category.getCategory(categoryId); // Replace with your API endpoint
//         setCategories(response.result);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Fetch subcategories when a category is selected
//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       if (selectedCategory) {
//         try {
//             const filter = {
//                 category_object_id: categoryId,
//             }
//           const response = await api.subcategory.getSubcategory(filter); // API for subcategories
//           setSubcategories(response.result);
//         } catch (error) {
//           console.error('Error fetching subcategories:', error);
//         }
//       }
//     };
//     fetchSubcategories();
//   }, [selectedCategory]);

//   return (
//     <div>
//       {/* Autocomplete for Categories */}
//       <Autocomplete
//         options={categories}
//         getOptionLabel={(option) => option.name}
//         onChange={(event, value) => setSelectedCategory(value)}
//         onInputChange={(event, value) => setSearchQuery(value)}
//     renderInput={(params) => (
//       <TextField {...params} label="Choose category" variant="outlined" />
//      )}
//     onScroll={handleScroll}
//      ListboxProps={{
//        onScroll: handleScroll,
//    }}
//    loading={loading}
       
//       />

//       {/* Autocomplete for Subcategories */}
//       <Autocomplete
//         options={subcategories}
//         getOptionLabel={(option) => option.name}
//         onChange={(event, value) => setSelectedSubcategory(value)}
//         renderInput={(params) => <TextField {...params} label="Select Subcategory" />}
//         disabled={!selectedCategory}  // Disable subcategory selection until a category is selected
//       />
//     </div>
//   );
// };

// export default CategoriesAndSubcategories;

