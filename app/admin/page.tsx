import Header from "@/components/Header";

const Admin = () => {
  return (
    <div>
      <Header />

      <form action="" className="container">
        <div className="mb-7">
          <label htmlFor="title">Product Name</label> <br />
          <input type="text" id="title" className="border-2" />
        </div>
        <div>
          <label htmlFor="price">Product Price</label> <br />
          <input type="number" id="price" className="border-2" />
        </div>
      </form>
    </div>
  );
};

export default Admin;
