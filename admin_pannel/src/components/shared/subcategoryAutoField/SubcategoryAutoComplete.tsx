import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { api } from "../../../utils/api";

const PAGE_SIZE = 1; // Adjust the page size as needed

interface SubcategoryAutoCompleteProps {
  setSubcategoryId: (id: string | null) => void;
}

const SubcategoryAutoComplete: React.FC<SubcategoryAutoCompleteProps> = ({ setSubcategoryId }) => {
  interface Subcategory {
    _id: string;
    name: string;
  }

  
  const [options, setOptions] = useState<Subcategory[]>([]);
  
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");

  const defProps = {
    options: options,
    getOptionLabel: (option: Subcategory) => `${option.name}`,
  };

  const getData = (data: Subcategory | null) => {
    console.log(data?._id);
    setSubcategoryId(data?._id ?? null);
  };

  const getSubcategoryList = useCallback(async (search = "", page = 1) => {
    setLoading(true);
    const filter = {
      page,
      category_object_id: categoryId,
      ...(search && { name: { $regex: `^${search}`, $options: "i" } }),
    };
    try {
      const response = await api.subcategory.getSubcategory(filter);
      console.log("options", options)
      console.log('API response:', response)
      setOptions((prevOptions) => [...prevOptions, ...response.result]);
      setHasMore(response.result.length === PAGE_SIZE); // Check if more data is available
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },[])

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const bottom = target.scrollHeight === target.scrollTop + target.clientHeight;
    if (bottom && hasMore && !loading) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        getSubcategoryList(searchQuery, newPage);
        return newPage;
      });
    }
  };

  useEffect(() => {
    getSubcategoryList(searchQuery, page);
  }, [searchQuery, page]);

  return (
    <Autocomplete
      sx={{ width: "500px" }}
      {...defProps}
     
      onChange={(event, value) => getData(value)}
      onInputChange={(event, value) => setSearchQuery(value)}
      renderInput={(params) => (
        <TextField {...params} label="Choose Subcategory" variant="outlined" />
      )}
      onScroll={handleScroll}
      ListboxProps={{
        onScroll: handleScroll,
      }}
      loading={loading}
    />
  );
};

export default SubcategoryAutoComplete;
