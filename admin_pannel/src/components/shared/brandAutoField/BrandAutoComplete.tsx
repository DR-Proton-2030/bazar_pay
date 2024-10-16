import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { api } from "../../../utils/api";

const PAGE_SIZE = 10; // Adjust the page size as needed

interface BrandAutoCompleteProps {
  setBrandId: (id: string | null) => void;
}

const BrandAutoComplete: React.FC<BrandAutoCompleteProps> = ({ setBrandId }) => {
  interface Brand {
    _id: string;
    name: string;
  }
  
  const [options, setOptions] = useState<Brand[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const defProps = {
    options: options,
    getOptionLabel: (option: Brand) => `${option.name}`,
  };

  const getData = (data: Brand | null) => {
    console.log(data?._id);
    setBrandId(data?._id ?? null);
  };

  const getBrandList = async (search = "", page = 1) => {
    setLoading(true);
    const filter = {
      page,
      ...(search && { name: { $regex: `^${search}`, $options: "i" } }),
    };
    try {
      const response = await api.brand.getBrand(filter);
      setOptions((prevOptions) => [...prevOptions, ...response.result]);
      setHasMore(response.result.length === PAGE_SIZE); // Check if more data is available
    } catch (error) {
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
        getBrandList(searchQuery, newPage);
        return newPage;
      });
    }
  };

  useEffect(() => {
    getBrandList(searchQuery, page);
  }, [searchQuery, page]);

  return (
    <Autocomplete
      sx={{ width: "500px" }}
      {...defProps}
      onChange={(event, value) => getData(value)}
      onInputChange={(event, value) => setSearchQuery(value)}
      renderInput={(params) => (
        <TextField {...params} label="Choose Brand" variant="outlined" />
      )}
      onScroll={handleScroll}
      ListboxProps={{
        onScroll: handleScroll,
      }}
      loading={loading}
    />
  );
};

export default BrandAutoComplete;
