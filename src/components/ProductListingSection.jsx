'use client';
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Img } from "@/components/Img";
import ProductDetails from "@/components/ProductDetails";
import SelectBox from "@/components/SelectBox";
import { DrawerFilters } from "@/components/drawer";
import axios from "axios";
import React, {Suspense, useEffect, useState} from  'react'

const dropDownOptions = [
    {label:'Option 1', value:'opttion1'},
    {label:'Option 1', value:'opttion1'},
    {label:'Option 1', value:'opttion1'}
]


export default function ProductListingSection() {
  const [data, setData]  = useState([]);
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [filterObj, setFilterObj] = useState({enabled:false, categories:[], priceRange:-1, ratingRange:-1})
  

  useEffect(() => {
    getData();
  }, [filterObj])

  async function getData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/?limit=40')
      const productsData = response?.data;
      setData(productsData)

      if (filterObj?.enabled) {
        console.log("Filter inside use effect the data updated", filterObj)
        setFilterData(
          data.filter(item => {
            // const matchesQuery = item.title.toLowerCase().startsWith(query.toLowerCase());
            const matchesCategory = Array.isArray(filterObj?.categories) &&
                                    typeof item.category === 'string' &&
                                    filterObj?.categories.includes(item.category);
            const matchesPriceRange = typeof item.price === 'number' &&
                                      typeof filterObj?.priceRange === 'number' &&
                                      item.price <= filterObj?.priceRange;
  
  
            const matchesRatingRange = item.rating && typeof item.rating.rate === 'number' &&
                                       typeof filterObj?.ratingRange === 'number' &&
                                       item.rating.rate >= filterObj?.ratingRange;
            return  matchesCategory 
            // && matchesPriceRange && matchesRatingRange;
          })

        );
        console.log('filterData', filterData)
      } 
      else {
        setFilterData(productsData)
      }
  
    }
    catch (e) {
      if (e.response) {
        if (e.response.status === 502) {
          alert('Bad Gateway: The server is down. Please try again later.');
        } 
        else {
          alert(`Error: ${e.response.status} - ${e.response.statusText}`);
        }
      } else if (e.request) {
       
        alert('Network Error: api server is down please try after sometime');
      } 
      else {
        alert(`Error: ${e.message}`);
      }
      console.log('Error details:', e);
    }
    
  }

console.log('filterData', data)

    return (
      <>
        {/* product listing section */}
        <div className="flex flex-col items-center">
          <div className="container-xs flex flex-col gap-[30px] md:px-5">
            <div className="px-5 flex items-start border-t-[0.5px] border-solid border-gray-300 bg-misc-white-0 py-6 sm:flex-col sm:py-5">
              <div className="flex flex-1 items-start gap-[75px] self-center sm:self-stretch sm:px-5 px-4">
                <Heading size="headingmd" as="h1" className="mt-1.5 uppercase">
                  {filterData?.length} Items
                </Heading>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  shape="square"
                  leftIcon={
                    <Img
                      src="/arrow-right.svg"
                      width={16}
                      height={16}
                      alt="Arrow Right"
                      className="h-[16px] w-[16px]"
                    />
                  }
                  className="min-w-[138px] gap-2 self-center font-adobecaslonpro underline"
                >
                  SHOW FILTER
                </Button>
              </div>
              <SelectBox
                shape="square"
                indicator={
                  <Img src="/arrow-left.svg" width={16} height={16} alt="Checkmark" className="h-[16px] w-[16px]" />
                }
                name="Sort Dropdown"
                placeholder={"RECOMMENDED"}
                // options={dropDownOptions}
                options={dropDownOptions}
                className="mt-1.5 w-[12%] gap-1.5 font-bold uppercase text-text-text sm:w-full sm:pr-5"
              />
            </div>
            <div className="grid gap-6 px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <Suspense fallback={<div>Loading feed...</div>}>
    {filterData.map((d, index) => (
      <ProductDetails {...d} key={"productsGrid" + index} />
    ))}
  </Suspense>
</div>
          </div>
          {/* <div className="grid gap-6 px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <Suspense fallback={<div>Loading feed...</div>}>
    {filterData.map((d, index) => (
      <ProductDetails {...d} key={"productsGrid" + index} />
    ))}
  </Suspense>
</div> */}


        </div>
        <DrawerFilters open={open} setOpen={setOpen} setFilterObj={setFilterObj}/>
      </>
    );
  }
  