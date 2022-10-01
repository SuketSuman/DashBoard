import {
  Lucide,
  Tippy,
  TomSelect,
  Alert,
  ClassicEditor,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";
import {product_categories,designations, statuses, type_of_platforms, formats, funtion_or_services, year_of_launch, employee_count} from "../../Constants";
import {countries} from "countries-list";

function Main() {
  const [subcategory, setSubcategory] = useState([]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");


  const submitHandler = (e)=>{
    e.preventDefault();
  }

  return (
    <form onSubmit = {submitHandler}>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Add Market Place</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        {/* BEGIN: Notification */}
        
       
        {/* BEGIN: Notification */}
        <div className="intro-y col-span-11 2xl:col-span-9">
           {/* BEGIN: Add Entity */}
           <div className="intro-y box p-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Add New Website
              </div>
              <div className="mt-5">
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Website URL</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="new_entity"
                      type="text"
                      className="form-control"
                      placeholder="New Entity"
                      required

                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: New Entity */}
     
          {/* BEGIN: Name & Type Information */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Name & Type
              </div>
              <div className="mt-5">
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Status of Website</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="status" className="form-select" required>
                    {
                        statuses.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.status}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Type of Platform</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="platform" className="form-select" required>
                    {
                        type_of_platforms.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.type}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Website Name</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="website-name"
                      type="text"
                      className="form-control"
                      placeholder="Website name"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 0/70
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Company Name</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="company-name"
                      type="text"
                      className="form-control"
                      placeholder="Company name"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 0/70
                    </div> */}
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
          {/* END: Name & Type Information */}


 {/* BEGIN: About the platform */}
 <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> About the Platform
              </div>
              <div className="mt-5">
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Format</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="format" className="form-select" required>
                    {
                        formats.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.value}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Function/Services</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="services" className="form-select" required>
                    {
                        funtion_or_services.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.value}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Tagline</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="tagline"
                      type="text"
                      className="form-control"
                      placeholder="Tagline"
                      maxLength={100}
                      required
                    />
                    <div className="form-help text-right">
                      Maximum character 100
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">A little about the company</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <textarea
                      id="about-the-company"
                      className="form-control"
                      placeholder="A little about the company"
                      maxLength={300}
                      required
                    />
                    <div className="form-help text-right">
                      Maximum character 300
                    </div>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
          {/* END: About the Platform */}



{/* BEGIN: Social Channels */}
<div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Social Channels
              </div>
              <div className="mt-5">
              
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Crunchbase URL</div>
                        {/*<div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                    </div>*/}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="crunchbase-url"
                      type="text"
                      className="form-control"
                      placeholder="Crunchbase URL"
                    
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Twitter URL</div>
                        {/*<div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                  </div>*/}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="twitter-url"
                      type="text"
                      className="form-control"
                      placeholder="twitter URL"
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">LinkedIn URL</div>
                        {/*<div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                  </div>*/}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="linkedin-url"
                      type="text"
                      className="form-control"
                      placeholder="LinkedIn URL"
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Country of Origin</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="country" className="form-select" required>
                    {
                        Object.keys(countries).map((res)=>{
                          return (
                            <option key={res} value={res}>
                          {countries[res] && countries[res].name}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Year of Launch</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="year_launch" className="form-select" required>
                    {
                        year_of_launch.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.value}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Employee Count</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="employee-count" className="form-select" required>
                    {
                        employee_count.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.value}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">CEO/Founder URL</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="founder-url"
                      type="text"
                      className="form-control"
                      placeholder="CEO/Founder URL"
                      required
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                
                
               
              </div>
            </div>
          </div>
          {/* END:Social Channels */}


          {/* BEGIN: Buyer */}
<div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Buyer
              </div>
              <div className="mt-5">
              
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Estimated Buyer Count</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="buyer-count"
                      type="text"
                      className="form-control"
                      placeholder="Estimated Buyer Count"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Estimate Source</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="buyer-source"
                      type="text"
                      className="form-control"
                      placeholder="Estimate Source"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>

                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Select Main Buyer Designations</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="buyer_designations" className="form-select" required>
                      
                    {
                        designations.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.designation}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Select Buyer Main Countries</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="buyer_countries" className="form-select" required>
                    {
                        Object.keys(countries).map((res)=>{
                          return (
                            <option key={res} value={res}>
                          {countries[res] && countries[res].name}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>

                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Name of key buyer Companies</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="buyer_companies"
                      type="text"
                      className="form-control"
                      placeholder="Name of key buyer Companies"
                      required
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Buyer Link</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="buyer-link"
                      type="text"
                      className="form-control"
                      placeholder="Buyer Link"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
          {/* END:Buyer */}

           {/* BEGIN: Seller */}
<div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Seller
              </div>
              <div className="mt-5">
              
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Estimated Seller Count</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="seller-count"
                      type="text"
                      className="form-control"
                      placeholder="Estimated Seller Count"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Estimate Source</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="seller-source"
                      type="text"
                      className="form-control"
                      placeholder="Estimate Source"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>

                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Select Main Seller Designations</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="seller_designations" className="form-select" required>
                   
                    {
                        designations.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.designation}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Select Seller Main Countries</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="seller_countries" className="form-select" required>
                    {
                        Object.keys(countries).map((res)=>{
                          return (
                            <option key={res} value={res}>
                          {countries[res] && countries[res].name}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>

                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Name of key Seller Companies</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="seller_companies"
                      type="text"
                      className="form-control"
                      placeholder="Name of key Seller Companies"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Seller Link</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="seller-link"
                      type="text"
                      className="form-control"
                      placeholder="Seller Link"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
          {/* END:Seller */}


           {/* BEGIN: Contacts */}
<div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Contact & Links
              </div>
              <div className="mt-5">
              
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Contact Email</div>
                        {/* <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div> */}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="contact_email"
                      type="email"
                      className="form-control"
                      placeholder="Contact Email"
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Contact Phone</div>
                        {/* <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div> */}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="contact_phone"
                      type="tel"
                      className="form-control"
                      placeholder="Contact Phone"
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Blog/News Link</div>
                        {/* <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div> */}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="blog_link"
                      type="text"
                      className="form-control"
                      placeholder="Blog/News Link"
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>

                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Case Study/User Story Link</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="userstory_link"
                      type="text"
                      className="form-control"
                      placeholder="Case Study/User Story Link"
                      required
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
            
              </div>
            </div>
          </div>
          {/* END:Contacts */}


{/* BEGIN: Industory/Category */}
<div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Industory/Category
              </div>
              <div className="mt-5">
              




                
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Primary Category/Industry</div>
                        {/* <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="tag_primary" className="form-select" required>
                    
                      {
                        product_categories.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.category}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Enter Key Products</div>
                        {/* <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div> */}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="primary_key"
                      type="text"
                      className="form-control"
                      placeholder="Enter Key Products"
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Secondary Category/Industry</div>
                        {/* <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="tag_secondary" className="form-select" required>
                  
                    {
                        product_categories.map((res)=>{
                          return (
                            <option key={res.id} value={res.id}>
                          {res.category}
                        </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Enter Key Products</div>
                        {/* <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div> */}
                      </div>
                      {/* <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="secondary_key"
                      type="text"
                      className="form-control"
                      placeholder="Enter Key Products"
                      
                    />
                    {/* <div className="form-help text-right">
                      Maximum character 100
                    </div> */}
                  </div>
                </div>
                
                
               
              </div>
            </div>
          </div>
          {/* END:Primary/Secondary */}


          <div className="flex justify-end flex-col md:flex-row gap-2 mt-5">
            <button
              type="button"
              className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
            >
              Save & Add New Product
            </button>
            <button
              type="submit"
              className="btn py-3 btn-primary w-full md:w-52"
            >
              Save
            </button>
          </div>
        </div>

      </div>
    </form>
  );
}

export default Main;
