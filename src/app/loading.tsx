import { Skeleton } from "../components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-3xl space-y-8">
        <Skeleton className="h-12 w-1/2 mx-auto" />
        <Skeleton className="h-8 w-3/4 mx-auto" />

        <div className="space-y-6">
          {/* Skeleton for the typing test area */}
          <Skeleton className="h-48 w-full" />

          {/* Skeleton for the controls/stats area */}
          <div className="flex justify-around items-center p-4">
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-24" />
          </div>

           {/* Skeleton for the bottom buttons */}
           <div className="flex justify-center gap-4 pt-4">
              <Skeleton className="h-12 w-32" />
            </div>
        </div>

         {/* Skeleton for SEO content */}
        <div className="mt-12 space-y-6">
           <Skeleton className="h-8 w-3/4" />
           <Skeleton className="h-20 w-full" />
           <Skeleton className="h-8 w-3/4 mt-4" />
           <Skeleton className="h-20 w-full" />
         </div>

         {/* Skeleton for FAQ */}
        <div className="mt-8 space-y-4">
           <Skeleton className="h-8 w-1/2" />
           <Skeleton className="h-10 w-full" />
           <Skeleton className="h-10 w-full" />
           <Skeleton className="h-10 w-full" />
         </div>

         {/* Skeleton for Image */}
        <div className="mt-8 w-full max-w-3xl">
           <Skeleton className="h-96 w-full" />
         </div>

      </div>
    </div>
  );
}
