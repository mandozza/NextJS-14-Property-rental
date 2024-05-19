import "@/assets/styles/globals.css";

export const metadata = {
  title: "Propert Pulse | Find the perfect property for you",
  description: "Find a your dream property with Property Pulse",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
