import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'
const Footer = () => {
  return (
    <footer className=' bg-tertiary max-padd-container text-white py-12 rounded-xl'>
      <div className=' grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className=' flex flex-col items-center md:items-start'>
          <Link to={'/'} className='bold-24 mb-4'>
           <h3>Fusion<span className='text-secondary'>Mart</span></h3>
          </Link>
          <p className='text-center md:text-left'> Chào mừng bạn đến với <strong>Shop FusionMart</strong> – Mua sắm trực tuyến tiện lợi! Tại đây, chúng tôi mang đến trải nghiệm mua sắm
           hiện đại với hàng ngàn sản phẩm chất lượng, từ thời trang, điện tử đến gia dụng và mỹ phẩm.
            Với giao diện thân thiện, dễ sử dụng, bạn có thể tìm kiếm và đặt hàng chỉ trong vài cú click</p>
        </div>

        <div className=' flex flex-col items-center md:items-start'>
          <h4 className=' bold-20 mb-4'>Quick Links</h4>
            <ul  className=' space-y-2 regular-15 text-gray-30'>
              <li><a href='/' className=' hover:text-secondary'>Home</a></li>
              <li><a href='/' className=' hover:text-secondary'>Categories</a></li>
              <li><a href='/' className=' hover:text-secondary'>Shop</a></li>
              <li><a href='/' className=' hover:text-secondary'>Contact Us</a></li>
            </ul>
        </div>

        <div className=' flex flex-col items-center md:items-start gap-y-1'> 
          <h4 className=' text-lg mb-4'>Contact Us</h4>
          <p>Email:<a href='' className='hover:text-secondary'>support@FusionMart</a></p>
          <p>Phone:<a href='' className='hover:text-secondary'>+12345678</a></p>
          <p>Address: 123 FusionMart, HN, VietNam</p>
        </div>

      </div>

      <div className=' flex flex-col items-center  mt-8'>
        <SocialIcons/>
        <hr className=' h-[1px] w-full max-w-screen mt-8 border-white my-4'/>
        <p className=' text-center text-sm'>&copy; {new Date().getFullYear()} FusionMart. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer