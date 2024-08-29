import OrderSumary from "@/components/order/OrderSumary";
import OrderSidebar from "@/components/OrderSidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar />
        <main className="md:flex-1 md:h-screen md:overflow-y-scroll ">
          {children}
        </main>
        <OrderSumary />
      </div>
    </>
  );
}
