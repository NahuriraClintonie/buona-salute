import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Programs from "./pages/Programs";
import HowWeWork from "./pages/HowWeWork";
import WhoWeServe from "./pages/WhoWeServe";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Partners from "./pages/Partners";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import Navbar from "./components/NavBar";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/partners" element={<Partners />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
