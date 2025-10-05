import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">My Notes App</h1>
          <p className="text-lg text-base-content/70 mb-6">
            Quản lý ghi chú của bạn một cách hiệu quả
          </p>
          <Link to="/create" className="btn btn-primary btn-lg">
            Tạo Ghi Chú Mới
          </Link>
        </div>

        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-xl">Chào mừng đến với ứng dụng ghi chú!</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
