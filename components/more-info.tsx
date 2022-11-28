import Image from 'next/image';
import image from '../public/resources/image 17.png'

const MoreInfo = () => {
  return (
		<div className='flex lg:flex-row flex-col w-full mb-[53px] lg:mb-[120px]'>
			<div className='lg:basis-1/2 basis-1'>
				<Image src={image} alt=''/>
			</div>
			
			<div className='lg:basis-1/2 basis-1 pt-[38px] lg:pt-47 px-[38px] lg:px-0'>
				<div className='max-w-[783px] lg:pr-8'>
					<p className='text-[18px] lg:text-[22px] leading-[27px] lg:leading-[32px] text-general-1'>LEARN ABOUT</p>
					<h2 className='text-[40px] lg:text-6xl leading-[51px] lg:leading-[77px] text-title lg:mb-3 mb-[15px]'>Rhinoplasty</h2>
					
					<div className='w-full lg:mb-[53px] mb-8'>
						<p className='lg:text-[24px] hidden lg:block lg:mb-8'>This is the basic information about nose jobs.</p>
						<p className='lg:text-[24px] text-[18px] leading-[27px] lg:leading-[35px] font-[350]'>
							Is the surgical nose procedure aimed at correcting aesthetic and functional aspects of it, whether in the septum, the tip, or the width. It can be performed under local or general anesthesia, depending on the area to be treated. At the Queen Catalina Plastic Surgery Clinic, our team of surgeons plans the operation approach according to the expectations and wishes of our patients in a combination of medical procedures and high-quality care.
						</p>
					</div>
				</div>
				
				<button
					className='bg-gradient-to-r from-general-1 to-general-2 cursor-pointer border
						py-[16px] px-[15px] lg:py-[18px] lg:px-[51px] rounded-xl lg:text-[24px] text-[18px]
						font-bold text-white leading-[27px] lg:leading-[35px]'>
					MORE INFORMATION
				</button>
			</div>
		</div>
  )
}
export default MoreInfo;
