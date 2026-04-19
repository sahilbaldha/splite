// import React, { useEffect, useState } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   Gamepad2,
//   Film,
//   Music,
//   Image as ImageIcon,
//   Trophy,
//   Utensils,
//   ShoppingCart,
//   Wine,
//   Receipt,
//   Zap,
//   Armchair,
//   SprayCan,
//   Wrench,
//   Home as HomeIcon,
//   GraduationCap,
//   Gift,
//   FileText,
//   HeartPulse,
//   Bike,
//   Train,
//   Car,
//   Fuel,
//   ParkingCircle,
//   Plane,
//   HelpCircle,
//   Hand,
//   Lightbulb,
//   Flame,
//   Droplet,
//   Wifi,
//   Trash2,
//   Tv,
//   Home,
//   PawPrint,
//   Wallet,
//   Briefcase,
//   Baby,
//   Shirt,
//   Shield,
//   Hotel,
// } from "lucide-react";

// import type { LucideIcon } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"


// type ApiSubCategory = {
//   id: string;
//   name: string;
// };

// type ApiCategory = {
//   id: string;
//   category_name: string;
//   subCategories: ApiSubCategory[];
// };

// type UI_Category = {
//   id: string;
//   name: string;
//   items: ApiSubCategory[];
// };


// const iconMap: Record<string, LucideIcon> = {
//   games: Gamepad2,
//   movies: Film,
//   music: Music,
//   photos: ImageIcon,
//   sports: Trophy,
//   "dining out": Utensils,
//   groceries: ShoppingCart,
//   liquor: Wine,
//   restaurant: Receipt,
//   electricity: Zap,
//   furniture: Armchair,
//   "household supplies": SprayCan,
//   maintenance: Wrench,
//   home: HomeIcon,
//   education: GraduationCap,
//   gifts: Gift,
//   taxes: FileText,
//   "medical expenses": HeartPulse,
//   bicycle: Bike,
//   "bus/train": Train,
//   car: Car,
//   "gas/ful": Fuel,
//   parking: ParkingCircle,
//   plan: Plane,
//   taxi: Car,
//   other: HelpCircle,
//   hand: Hand,
//   light: Lightbulb,
//   "heat/gas": Flame,
//   water: Droplet,
//   "tv/phone/internet": Wifi,
//   trash: Trash2,
//   electronics: Tv,
//   mortgage: Home,
//   pets: PawPrint,
//   rent: Wallet,
//   services: Briefcase,
//   childcare: Baby,
//   clothing: Shirt,
//   insurance: Shield,
//   hotel: Hotel,
//   general: HelpCircle,
// };

// const categoryColors: Record<string, string> = {
//   Entertainment: "bg-purple-100",
//   "Food and drink": "bg-green-100",
//   Home: "bg-yellow-100",
//   Life: "bg-orange-100",
//   Transportation: "bg-red-100",
//   Utilities: "bg-blue-100",
//   Uncategorized: "bg-gray-300",
// };

// const categoryHoverColors: Record<string, string> = {
//   Entertainment: "bg-purple-300",
//   "Food and drink": "bg-green-300",
//   Home: " bg-yellow-300",
//   Life: " bg-orange-300",
//   Transportation:"bg-red-300",
//   Utilities: " bg-blue-300",
//   Uncategorized: " bg-gray-400",
// };




// export const Home1: React.FC = () => {
//   const [categories, setCategories] = useState<UI_Category[]>([]);
//   const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<string | null>(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:5000/create/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted: UI_Category[] = data.data.map((cat: ApiCategory) => ({
//           id: cat.id,
//           name: cat.category_name,
//           items: cat.subCategories,
//         }));
//         setCategories(formatted);

//         // Initial Selection from backend
//         const defaultId = formatted[0]?.items[0]?.id;
//         if (defaultId) setSelectedSubCategoryId(defaultId);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const getSelectedSubData = () => {
//     for (const cat of categories) {
//       const item = cat.items.find((i) => i.id === selectedSubCategoryId);
//       if (item) return { item, categoryName: cat.name };
//     }
//     return null;
//   };

//   const selectedData = getSelectedSubData();
//   const selectedItem = selectedData?.item;
//   const SelectedIcon = selectedItem ? (iconMap[selectedItem.name.toLowerCase()] || HelpCircle) : HelpCircle;

//   return (
//     <div className="p-10 flex flex-col items-center">
     
//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <div 
//               className={`p-2 flex items-center justify-center rounded-md border transition cursor-pointer border-gray-200 ${categoryColors[selectedData?.categoryName || ""] || "bg-gray-50"} hover:border-blue-500`}
//             >
//               <SelectedIcon className="w-4.5 h-4.5 text-gray-600" />
//             </div>
//           </PopoverTrigger>
          
//           <PopoverContent className="w-fit p-0 border-none shadow-2xl rounded-xl overflow-hidden" align="start">
//               <div className="flex flex-col gap-3 p-3 bg-[#eee] w-fit h-fit">
//                 {categories.map((category) => (
//                   <div key={category.id} className="flex items-center gap-4">
//                     <div className="w-30 text-gray-700 font-medium whitespace-nowrap text-[14px]">
//                       {category.name}:
//                     </div>
//                     <div className="flex flex-wrap gap-1">
//                       {category.items.map((item) => {
//                         const Icon = iconMap[item.name.toLowerCase()];
//                         const isSelected = selectedSubCategoryId === item.id;
//                         return (
//                           <Tooltip key={item.id}>
//                             <TooltipTrigger asChild>
//                               <div
//                                 onClick={() => {
//                                   setSelectedSubCategoryId(item.id);
//                                   setOpen(false);
//                                 }}
//                                 className={`p-2 flex items-center justify-center rounded-md border transition cursor-pointer group ${
//                                   isSelected 
//                                     ? `${categoryHoverColors[category.name] || "bg-blue-300"} border-black`
//                                     : `border-gray-200 ${categoryColors[category.name] || "bg-gray-50"} hover:border-blue-500`
//                                 }`}
//                               >
//                                 {Icon ? (
//                                   <Icon className={`w-4.5 h-4.5 group-hover:text-blue-600`} />
//                                 ) : (
//                                   <HelpCircle className="w-4.5 h-4.5 text-gray-400" />
//                                 )}
//                               </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                               <p className="capitalize text-xs">{item.name}</p>
//                             </TooltipContent>
//                           </Tooltip>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//           </PopoverContent>
//         </Popover>
//       </div>
//   );
// };

// export default Home1;



// import React, { useEffect, useState } from "react";
// import { 
//   ChevronRight, X, Gamepad2, Film, Music, Image as ImageIcon, Trophy, Utensils, 
//   ShoppingCart, Wine, Receipt, Zap, Armchair, SprayCan, Wrench, Home as HomeIcon, 
//   GraduationCap, Gift, FileText, HeartPulse, Bike, Train, Car, Fuel, ParkingCircle, 
//   Plane, HelpCircle, Hand, Lightbulb, Flame, Droplet, Wifi, Trash2, Tv, PawPrint, 
//   Wallet, Briefcase, Baby, Shirt, Shield, Hotel 
// } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { ScrollArea } from "@/components/ui/scroll-area";


// type ApiSubCategory = {
//   id: string;
//   name: string;
// };

// type ApiCategory = {
//   id: string;
//   category_name: string;
//   subCategories: ApiSubCategory[];
// };

// const iconMap: Record<string, any> = {
//   games: Gamepad2,
//   movies: Film,
//   music: Music,
//   photos: ImageIcon,
//   sports: Trophy,
//   "dining out": Utensils,
//   groceries: ShoppingCart,
//   liquor: Wine,
//   restaurant: Receipt,
//   electricity: Zap,
//   furniture: Armchair,
//   "household supplies": SprayCan,
//   maintenance: Wrench,
//   home: HomeIcon,
//   education: GraduationCap,
//   gifts: Gift,
//   taxes: FileText,
//   "medical expenses": HeartPulse,
//   bicycle: Bike,
//   "bus/train": Train,
//   car: Car,
//   "gas/ful": Fuel,
//   parking: ParkingCircle,
//   plan: Plane,
//   taxi: Car,
//   other: HelpCircle,
//   hand: Hand,
//   light: Lightbulb,
//   "heat/gas": Flame,
//   water: Droplet,
//   "tv/phone/internet": Wifi,
//   trash: Trash2,
//   electronics: Tv,
//   mortgage: HomeIcon,
//   pets: PawPrint,
//   rent: Wallet,
//   services: Briefcase,
//   childcare: Baby,
//   clothing: Shirt,
//   insurance: Shield,
//   hotel: Hotel,
//   general: HelpCircle,
// };

// const categoryColors: Record<string, string> = {
//   Entertainment: "bg-purple-100",
//   "Food and drink": "bg-green-100",
//   Home: "bg-yellow-100",
//   Life: "bg-orange-100",
//   Transportation: "bg-red-100",
//   Utilities: "bg-blue-100",
//   Uncategorized: "bg-gray-300",
// };

// export const Home1: React.FC = () => {
//   const [categories, setCategories] = useState<ApiCategory[]>([]);
//   const [activeCategory, setActiveCategory] = useState<ApiCategory | null>(null);
//   const [selectedSubId, setSelectedSubId] = useState<string | null>(null);
//   const [open, setOpen] = useState(false);

//  useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/create/categories");
//       const json = await res.json();

//       const data: ApiCategory[] = json.data;
//       setCategories(data);

//       const uncategorized = data.find(
//         (c) => c.category_name === "Uncategorized"
//       );

//       if (uncategorized) {
//         setActiveCategory(uncategorized);

//         const general = uncategorized.subCategories.find(
//           (s) => s.name.toLowerCase() === "general"
//         );

//         if (general) setSelectedSubId(general.id);
//       } else if (data.length > 0) {
//         setActiveCategory(data[0]);
//         setSelectedSubId(data[0].subCategories[0]?.id || null);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   };

//   fetchCategories();
// }, []);


//   const renderSelectedValue = () => {
//     for (const cat of categories) {
//       const sub = cat.subCategories.find((s) => s.id === selectedSubId);
//       if (sub) {
//         const Icon = iconMap[sub.name.toLowerCase()] || HelpCircle;
//         return (
//           <div className={`p-2 flex items-center justify-center rounded-md border transition cursor-pointer border-gray-200 ${categoryColors[cat.category_name] || "bg-gray-50"} hover:border-blue-500`}>
//              <Icon className="w-5 h-5 text-gray-700" />
//           </div>
//         );
//       }
//     }
//     return <HelpCircle className="w-5 h-5 text-gray-400" />;
//   };

//   return (
//     <div className="p-10">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <div className="w-fit cursor-pointer">
//             {renderSelectedValue()}
//           </div>
//         </PopoverTrigger>

//         <PopoverContent className="p-0 w-[450px] overflow-hidden" align="start">
         
//           <div className="bg-[#56ba9a] text-white px-4 py-2 flex justify-between items-center">
//             <span className="font-semibold text-lg">Choose a category</span>
//             <X className="w-5 h-5 cursor-pointer" onClick={() => setOpen(false)} />
//           </div>

//           <div className="flex h-[350px]">
  
//             <ScrollArea className="w-1/2 border-right bg-white">
//               {categories.map((category) => (
//                 <div
//                   key={category.id}
//                   onMouseEnter={() => setActiveCategory(category)}
//                   className={`flex items-center justify-between px-4 py-3 cursor-pointer text-sm transition-colors border-b border-gray-100 last:border-0 ${
//                     activeCategory?.id === category.id
//                       ? "bg-gray-200 text-black font-semibold"
//                       : "text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   {category.category_name}
//                   <ChevronRight className="w-4 h-4 text-gray-400" />
//                 </div>
//               ))}
//             </ScrollArea>

          
//             <ScrollArea className="w-1/2 bg-[#f0f0f0]">
//               {activeCategory?.subCategories.map((sub) => (
//                 <div
//                   key={sub.id}
//                   onClick={() => {
//                     setSelectedSubId(sub.id);
//                     setOpen(false);
//                   }}
//                   className={`px-4 py-3 cursor-pointer text-sm transition-colors border-b border-gray-200 last:border-0 ${
//                     selectedSubId === sub.id
//                       ? "bg-gray-300 text-black font-bold"
//                       : "text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {sub.name}
//                 </div>
//               ))}
//             </ScrollArea>
//           </div>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// };

// export default Home1;



import React, { useState, useEffect } from 'react';
import { Facehash } from "facehash";

const usersData = [
  {
    id: 'u1',
    firstName: 'hardik',
    lastName: 'bhanderi',
  },
  {
    id: 'u2',
    firstName: 'sahil',
    lastName: 'baldha',
  },
  {
    id: 'u3',
    firstName: 'Shubham',
    lastName: '',
  }
];

export default function Home1() {
  const [splitType, setSplitType] = useState('equal');
  const [users] = useState(usersData);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [selectedUserIds, setSelectedUserIds] = useState(usersData.map(u => u.id));
  
  const [exactAmounts, setExactAmounts] = useState<Record<string, string>>({});
  
  console.log('mainObject',exactAmounts);
 
  
   
  const [percentages, setPercentages] = useState<Record<string, string>>({});

  // console.log('percentage',percentages);
  
  // Optimized Synchronization: Keep 'Exact' amounts and 'Percentages' updated in real-time based on active mode
  useEffect(() => {
    const newExacts: Record<string, string> = {};
    
    if (splitType === 'equal') {
      const selectedCount = selectedUserIds.length;
      if (selectedCount > 0) {
        // Calculate the base share in cents to avoid floats
        const totalCents = Math.round(totalAmount * 100);
        const baseCents = Math.floor(totalCents / selectedCount);
        const remainderCents = totalCents % selectedCount;
        
        let foundFirst = false;
        users.forEach(u => {
          if (selectedUserIds.includes(u.id)) {
            if (!foundFirst) {
              // Add the remainder (in pennies) to the first selected user
              newExacts[u.id] = ((baseCents + remainderCents) / 100).toFixed(2);
              foundFirst = true;
            } else {
              newExacts[u.id] = (baseCents / 100).toFixed(2);
            }
          } else {
            newExacts[u.id] = "0.00";
          }
        });
      } else {
        users.forEach(u => { newExacts[u.id] = "0.00"; });
      }
      setExactAmounts(newExacts);
      // Removed setPercentages from here: Percentages should stay 0 unless manually edited
    } else if (splitType === 'percentage') {
      users.forEach(u => {
        const p = parseFloat(percentages[u.id]) || 0;
        newExacts[u.id] = (totalAmount * (p / 100)).toFixed(2);
      });
      setExactAmounts(newExacts);
    }
  }, [splitType, totalAmount, selectedUserIds, percentages, users]); // removed percentages from deps to avoid loop

  const handleToggleUser = (id: string) => {
    setSelectedUserIds(prev =>
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
    );
  };

  const handleExactChange = (id: string, value: string) => {

    setExactAmounts(prev => ({ ...prev, [id]: value }));
  };

  const handlePercentageChange = (id: string, value: string) => {
  
    setPercentages(prev => ({ ...prev, [id]: value }));
  };

  const splitAmount = selectedUserIds.length > 0 ? (Number(totalAmount) / selectedUserIds.length).toFixed(2) : "0.00";

  const totalExact = Object.values(exactAmounts).reduce<number>((a, b) => a + (parseFloat(b) || 0), 0);
  const exactRemaining = Number(totalAmount) - totalExact;

  const totalPercentage = Object.values(percentages).reduce<number>((a, b) => a + (parseFloat(b) || 0), 0);
  const percentageRemaining = 100 - totalPercentage;

  const isValid = splitType === 'equal' ? selectedUserIds.length > 0 
                : splitType === 'exact' ? Math.abs(exactRemaining) < 0.01
                : Math.abs(percentageRemaining) < 0.01;


                const payload = Object.entries(exactAmounts)
  .filter(([_, amount]) => Number(amount) > 0)
  .map(([userId, amount]) => ({
    userId,
    amount: Number(amount),
  }));


// console.log(payload);



  return (
          
          <div className="bg-white rounded-md shadow-2xl  max-w-[360px] overflow-hidden flex flex-col font-sans">
            <div className="bg-[#5bc5a7] text-white px-4 py-2.5 flex justify-between items-center">
              <h3 className="text-lg font-semibold tracking-wide">Choose split options</h3>
              <button 
                className="text-white hover:text-gray-200 text-xl leading-none font-bold outline-none"
              >
                ×
              </button>
            </div>

            <div className="px-5 pt-5 pb-2">
              <div className="mb-4">
                <div className="flex items-center border border-gray-300 rounded shadow-sm overflow-hidden bg-white">
                  <div className="bg-[#eeeeee] text-gray-600 px-3 py-1.5 border-r border-gray-300 font-bold">$</div>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    onChange={(e) => setTotalAmount(Number(e.target.value))}
                    className="w-full px-3 py-1.5 outline-none text-lg font-semibold text-gray-800" 
                  />
                </div>
              </div>

              <div className="flex border border-gray-300 rounded shadow-sm overflow-hidden text-gray-500 bg-[#fbfbfb] text-[15px] font-medium transition-colors">
                
                
                <button 
                  onClick={() => setSplitType('equal')}
                  className={`flex-1 py-1.5 border-r border-gray-300 font-bold transition-colors ${
                    splitType === 'equal' ? 'bg-[#5bc5a7] text-white shadow-inner' : 'hover:bg-gray-100'
                  }`}
                >
                  =
                </button>

               
                <button 
                  onClick={() => setSplitType('exact')}
                  className={`flex-1 py-1.5 border-r border-gray-300 transition-colors ${
                    splitType === 'exact' ? 'bg-[#5bc5a7] text-white shadow-inner' : 'hover:bg-gray-100'
                  }`}
                >
                  1.23
                </button>

             
                <button 
                  onClick={() => setSplitType('percentage')}
                  className={`flex-1 py-1.5 border-r border-gray-300 transition-colors ${
                    splitType === 'percentage' ? 'bg-[#5bc5a7] text-white shadow-inner' : 'hover:bg-gray-100'
                  }`}
                >
                  %
                </button>
              
              </div>
            </div>

           
            <div className="px-5 pb-5">
              
             
              {splitType === 'equal' && (
                <>
                  <h4 className="font-bold text-[#333333] text-[17px] mb-4 mt-2">Split equally</h4>
                  
                  <div className="flex flex-col gap-4">
                    {users.map(user => {
                      const isSelected = selectedUserIds.includes(user.id);
                      return (
                        <div key={user.id} className={`flex items-center justify-between transition-all duration-200 ${!isSelected ? 'opacity-50' : ''}`}>
                          <div className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              checked={isSelected}
                              onChange={() => handleToggleUser(user.id)}
                              className="w-[18px] h-[18px] accent-[#0073ff] cursor-pointer" 
                            />
                            <div className={`rounded-full overflow-hidden border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-blue-300 border-blue-400' : 'bg-gray-100 border-gray-200'}`}>
                              <Facehash name={user.firstName} enableBlink size={36} />
                            </div>
                            <span className={`text-[#333333] text-[15px] transition-all ${!isSelected ? 'underline decoration-gray-400 text-gray-400' : ''}`}>
                              <span className="font-semibold">{user.firstName}</span> {user.lastName}
                            </span>
                          </div>
                          <span className={`text-[15px] font-medium ${isSelected ? 'text-[#555555]' : 'text-gray-300'}`}>
                            ${isSelected ? splitAmount : "0.00"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

           
              {splitType === 'exact' && (
                <>
                  <h4 className="font-bold text-[#333333] text-[17px] mb-4 mt-2">Split by exact amounts</h4>
                  
                  <div className="flex flex-col gap-4">
                    {users.map(user => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className='rounded-full bg-blue-300'>
                            <Facehash name={user.firstName} enableBlink size={36}/>
                          </div>
                          <span className="text-[#333333] text-[15px]"><span className="font-semibold">{user.firstName}</span> {user.lastName}</span>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-[3px] overflow-hidden w-[85px] shadow-sm bg-white">
                          <div className="bg-[#eeeeee] text-gray-600 px-2 py-0.5 border-r border-gray-300 text-sm">$</div>
                          <input 
                            type="number" 
                            className="w-full text-sm py-0.5 px-1 outline-none text-gray-800 font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                            placeholder="0.00"
                            value={exactAmounts[user.id] === "0" || exactAmounts[user.id] === "0.00" ? "" : exactAmounts[user.id]}
                            onChange={(e) => handleExactChange(user.id, e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-[#e2e2e2] pt-3 flex justify-between items-start">
                    <span className="font-bold text-[#333333] text-[15px]">TOTAL</span>
                    <div className="text-right">
                      <div className={`font-bold text-[17px] leading-tight ${exactRemaining === 0 ? 'text-[#333333]' : 'text-red-500'}`}>
                        ${totalExact.toFixed(2)}
                      </div>
                      <div className={`text-[12px] mt-0.5 ${exactRemaining === 0 ? 'text-[#999999]' : 'text-red-500 font-medium'}`}>
                        {exactRemaining > 0 ? `$${exactRemaining.toFixed(2)} left` : exactRemaining < 0 ? `$${Math.abs(exactRemaining).toFixed(2)} over` : 'Complete!'}
                      </div>
                    </div>
                  </div>
                </>
              )}

             
              {splitType === 'percentage' && (
                <>
                  <h4 className="font-bold text-[#333333] text-[17px] mb-4 mt-2">Split by percentages</h4>
                  
                  <div className="flex flex-col gap-4">
                    {users.map(user => {

                      
                      return (
                        <div key={user.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className='rounded-full bg-blue-300'>
                              <Facehash name={user.firstName} enableBlink size={36}/>
                            </div>
                            <span className="text-[#333333] text-[15px] font-semibold">
                              {user.firstName} {user.lastName}
                            </span>
                          </div>
                          <div className="flex items-center border border-gray-300 rounded-[3px] overflow-hidden w-[75px] shadow-sm">
                            <input 
                              type="number" 
                              className="w-full text-sm py-0.5 px-1 outline-none text-gray-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                              placeholder="0"
                              value={percentages[user.id] === "0" || percentages[user.id] === "0.00" ? "" : percentages[user.id]}
                              onChange={(e) => handlePercentageChange(user.id, e.target.value)}
                            />
                            <div className="bg-[#eeeeee] text-gray-600 px-2 py-0.5 border-l border-gray-300 text-sm">%</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 border-t border-[#e2e2e2] pt-3 flex justify-between items-start">
                    <span className="font-bold text-[#333333] text-[15px]">TOTAL</span>
                    <div className="text-right">
                      <div className={`font-bold text-[17px] leading-tight ${percentageRemaining === 0 ? 'text-[#333333]' : 'text-red-500'}`}>
                        {totalPercentage.toFixed(2)}%
                      </div>
                      <div className={`text-[12px] mt-0.5 ${percentageRemaining === 0 ? 'text-[#999999]' : 'text-red-500 font-medium'}`}>
                        {percentageRemaining > 0 ? `${percentageRemaining.toFixed(2)}% left` : percentageRemaining < 0 ? `${Math.abs(percentageRemaining).toFixed(2)}% over` : 'Complete!'}
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-8">
                <button 
                  disabled={!isValid || totalAmount <= 0}
                  className={`w-full py-3 rounded-md font-bold text-white transition-all shadow-lg ${
                    isValid && totalAmount > 0 
                      ? 'bg-[#5bc5a7] hover:bg-[#4ab395] active:scale-[0.98]' 
                      : 'bg-gray-300 cursor-not-allowed opacity-70'
                  }`}
                  onClick={() => alert('Split Saved Successfully!')}
                >
                  SAVE SPLIT
                </button>
              </div>
          </div>
        </div>
      );
    }

    


// import React from 'react';

// export default function App1() {
//   return (
//     <div className="max-w-4xl mx-auto mt-10 bg-white shadow-sm border border-gray-200 font-sans">
      
  
//       <div className="flex bg-[#f3f3f3] border-b border-gray-200 py-3 text-center">
//         <div className="flex-1 border-r border-gray-300">
//           <div className="text-gray-400 text-sm">total balance</div>
//           <div className="text-[#ff5232] text-lg">- $3963.15</div>
//         </div>
//         <div className="flex-1 border-r border-gray-300">
//           <div className="text-gray-400 text-sm">you owe</div>
//           <div className="text-[#ff5232] text-lg">$4529.83</div>
//         </div>
//         <div className="flex-1">
//           <div className="text-gray-400 text-sm">you are owed</div>
//           <div className="text-[#5bc5a7] text-lg">$566.68</div>
//         </div>
//       </div>

  
//       <div className="flex justify-between items-center px-6 py-4">
//         <h2 className="text-gray-400 font-medium text-lg tracking-wide w-1/3">YOU OWE</h2>
        
    
 

//         <h2 className="text-gray-400 font-medium text-lg tracking-wide w-1/3 text-right">YOU ARE OWED</h2>
//       </div>

   
//       <div className="flex min-h-[300px]">
        
     
//         <div className="flex-1 p-6 flex flex-col gap-8 border-r border-gray-200">
//           <div>
// <div className="flex items-center gap-3 mb-3">
//             <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 shrink-0">
//               <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-800"></div>
//             </div>
//             <div>
//               <h3 className="text-xl text-gray-800 font-normal leading-tight">Shubham</h3>
//               <p className="text-[#ff5232] text-sm">
//                 you owe <span className="font-semibold">$4529.83</span>
//               </p>
//             </div>
//           </div>

//           <ul className="text-[13px] text-[#999999] ml-6 list-none space-y-1.5">
//             <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//               You owe Shubham <span className="text-[#ff5232]">$3749.50</span> for “Non-group expenses”
//             </li>
//             <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//               You owe Shubham <span className="text-[#ff5232]">$770.33</span> for “SA VS NZ”
//             </li>
//             <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//               You owe Shubham <span className="text-[#ff5232]">$10.00</span> for “test”
//             </li>
//           </ul>
//           </div>
          
//                     <div>
// <div className="flex items-center gap-3 mb-3">
//             <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 shrink-0">
//               <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-800"></div>
//             </div>
//             <div>
//               <h3 className="text-xl text-gray-800 font-normal leading-tight">Shubham</h3>
//               <p className="text-[#ff5232] text-sm">
//                 you owe <span className="font-semibold">$4529.83</span>
//               </p>
//             </div>
//           </div>

//           <ul className="text-[13px] text-[#999999] ml-6 list-none space-y-1.5">
//             <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//               You owe Shubham <span className="text-[#ff5232]">$3749.50</span> for “Non-group expenses”
//             </li>
//             <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//               You owe Shubham <span className="text-[#ff5232]">$770.33</span> for “SA VS NZ”
//             </li>
//             <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//               You owe Shubham <span className="text-[#ff5232]">$10.00</span> for “test”
//             </li>
//           </ul>
//           </div>
          
//         </div>

//         <div className="flex-1 p-6 flex flex-col gap-8">
        
//             <div>
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
//                   <div className="w-full h-full bg-[#1b4332] grid grid-cols-2">
//                     <div className="bg-[#2d6a4f]"></div>
//                     <div className="bg-[#40916c]"></div>
//                     <div className="bg-[#52b788]"></div>
//                     <div className="bg-[#74c69d]"></div>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl text-gray-800 font-normal leading-tight">hardik bhanderi</h3>
//                   <p className="text-[#5bc5a7] text-sm">
//                     owes you <span className="font-semibold">$566.68</span>
//                   </p>
//                 </div>
//               </div>

//               <ul className="text-[13px] text-[#999999] ml-6 list-none space-y-1.5">
//                 <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//                   hardik owes you <span className="text-[#5bc5a7]">$666.68</span> for “Non-group expenses”
//                 </li>
//                 <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//                   You owe hardik <span className="text-[#ff5232]">$100.00</span> for “SA VS NZ”
//                 </li>
//               </ul>
//             </div>

//           <div>
//             <div className="flex items-center gap-3 mb-3">
             
//               <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
//                 <div className="w-full h-full bg-[#e76f51] grid grid-cols-2">
//                   <div className="bg-[#f4a261]"></div>
//                   <div className="bg-[#e9c46a]"></div>
//                   <div className="bg-[#2a9d8f]"></div>
//                   <div className="bg-[#264653]"></div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl text-gray-800 font-normal leading-tight">jash kanani</h3>
//                 <p className="text-[#5bc5a7] text-sm">
//                   owes you <span className="font-semibold">$566.68</span>
//                 </p>
//               </div>
//             </div>

//             <ul className="text-[13px] text-[#999999] ml-6 list-none space-y-1.5">
//               <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//                 jash owes you <span className="text-[#5bc5a7]">$645.68</span> for “Non-group expenses”
//               </li>
//               <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-300">
//                 You owe jash <span className="text-[#ff5232]">$124.00</span> for “SA VS NZ”
//               </li>
//             </ul>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }
