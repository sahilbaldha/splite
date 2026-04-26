// git remote set-url origin https://sahil-exelance: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@github.com/Shubham-Exelance/splitpro.git
  // const handleSubmit = async () => {
  //   if (!isValid || totalAmount <= 0) return;

  //   try {
  //     const formData = new FormData();

  //     formData.append("description", descriptions || "");
  //     formData.append("amount", totalAmount.toString());
  //     formData.append("paidBy", paidDetails.paidId);
  //     formData.append("date", date ? date.toISOString() : "");

  //     formData.append("subCategoryId", selectedSubId || "");

  //     const payload = Object.entries(exactAmounts)
  //       .filter(([_, amount]) => Number(amount) > 0)
  //       .map(([userId, amount]) => ({
  //         userId,
  //         amount: Number(amount),
  //       }));

  //     formData.append("splitDetails", JSON.stringify(payload));

  //     formData.append("notes", selectedNotes || "");

  //     if (selectedFile) {
  //       formData.append("file", selectedFile);
  //     }

  //     const response = await fetch("/api/expense", {
  //       method: "POST",
  //       body: formData,
  //       credentials: "include",
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to save expense");
  //     }

  //     handleCloseAll();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


    


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


// "use client";

// import { Skeleton } from "@/components/ui/skeleton";

// export default function SplitwiseSkeleton() {
//   return (
//     <div className="flex flex-col">
//       <div className="border-b h-15">
//         <div className="w-[1000px] m-auto h-full flex items-center justify-between">
//           <Skeleton className="w-30 h-8" />
//           <Skeleton className="w-20 h-8" />
//         </div>
//       </div>

//       <div className="h-screen w-[1200px] m-auto flex bg-[#f6f6f6]">
//         {/* LEFT SIDEBAR */}
//         <aside className="w-[260px] bg-white border-r px-4 py-5 space-y-5">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Skeleton className="h-8 w-8 rounded-md" />
//             <Skeleton className="h-6 w-28" />
//           </div>

//           {/* Menu */}
//           <div className="space-y-3">
//             <Skeleton className="h-5 w-36" />
//             <Skeleton className="h-5 w-40" />
//             <Skeleton className="h-5 w-32" />
//           </div>

//           {/* Groups */}
//           <div className="space-y-3 pt-4">
//             <Skeleton className="h-4 w-20" />

//             {[1, 2, 3].map((i) => (
//               <Skeleton key={i} className="h-5 w-full" />
//             ))}
//           </div>

//           {/* Friends */}
//           <div className="space-y-3 pt-4">
//             <Skeleton className="h-4 w-20" />

//             {[1, 2].map((i) => (
//               <Skeleton key={i} className="h-5 w-full" />
//             ))}
//           </div>

//           {/* Invite box */}
//           <div className="pt-4 space-y-3">
//             <Skeleton className="h-10 w-full rounded-md" />
//             <Skeleton className="h-10 w-28 rounded-md" />
//           </div>
//         </aside>

//         {/* CENTER */}
//         <main className="flex-1 bg-white px-6 py-5 space-y-6">
//           {/* Header */}
//           <div className="flex justify-between items-center">
//             <div className="space-y-2">
//               <Skeleton className="h-8 w-30" />
//               <Skeleton className="h-4 w-15" />
//             </div>

//             <div className="flex gap-3">
//               <Skeleton className="h-10 w-25 rounded-md" />
//               <Skeleton className="h-10 w-25 rounded-md" />
//             </div>
//           </div>

//           {/* Expense List */}
//           {[1, 2, 3, 4, 5].map((item) => (
//             <div
//               key={item}
//               className="border-b pb-4 flex justify-between items-center"
//             >
//               <div className="flex gap-4 items-center">
//                 <Skeleton className="h-14 w-14 rounded-md" />

//                 <div className="space-y-2">
//                   <Skeleton className="h-5 w-32" />
//                   <Skeleton className="h-4 w-20" />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Skeleton className="h-5 w-32" />
//                 <Skeleton className="h-4 w-28" />
//               </div>
//             </div>
//           ))}
//         </main>

//         {/* RIGHT SIDEBAR */}
//         <aside className="w-[300px] bg-white border-l px-5 py-5 space-y-5">
//           <Skeleton className="h-5 w-40" />

//           {[1, 2, 3].map((i) => (
//             <div key={i} className="flex items-center gap-3">
//               <Skeleton className="h-12 w-12 rounded-full" />

//               <div className="space-y-2 flex-1">
//                 <Skeleton className="h-4 w-32" />
//                 <Skeleton className="h-4 w-24" />
//               </div>
//             </div>
//           ))}

//           <Skeleton className="h-5 w-28 mt-4" />
//         </aside>
//       </div>
//     </div>
//   );
// }
