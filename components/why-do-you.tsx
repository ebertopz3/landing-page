import image2 from '../public/resources/image 18.png';
import Image from 'next/image';

const WhyDoYou = () => {
	const cardImage = () => {
	  return (
		  <div className='w-full rounded-3xl shadow-lg max-w-[682px]'>
			  <Image src={image2} alt=''/>
			  <div className='w-full px-[34px] lg:px-[73px] py-[15px] lg:py-[55px] '>
								<span className='text-basic text-[24px] font-[350] text-center'>
									These are small imperfections, which we have from birth, due to their size or shape in our image.
								</span>
			  </div>
		  </div>
	  )
	}
  return (
		<div className='flex justify-center  px-[38px]   mb-[92px] lg:mb-[139px]'>
			<div className='lg:max-w-[1363px] w-full'>
				
				<div className='flex lg:flex-row flex-col justify-center w-full'>
					
					<div className='lg:basis-1/2 basis-1'>
						<div className='lg:max-w-[556px]  w-full '>
							
							<h2 className='text-title font-normal lg:text-6xl text-[40px] mb-[9px] lg:mb-[12px] leading-[51px] lg:leading-[76px]'>
								Why do you need a Rhinoplasty?
							</h2>
							
							<p className='text-basic lg:text-[24px] text-[18px] font-[350] leading-[27px] lg:leading-[35px] mb-[34px] lg:mb-[33px]'>
								Our noses define our faces, in some cases you may find yourself going through one of these situations:
							</p>
							
							<div className='flex items-center text-white w-full h-[63px] lg:h-[106px]
							bg-gradient-to-r from-general-1 to-general-2 rounded-lg px-[28px] mb-[34px] lg:mb-[28px]'>
								<h2 className='font-bold text-[35px] lg:text-[60px] inline'>
									01
								</h2>
								<span className='lg:ml-8 ml-3.5 font-bold text-[16px] lg:text-[28px]'>
									Complexes because of your nose
								</span>
							</div>
							<div className='lg:hidden w-full flex justify-center mb-[34px]'>
								{cardImage()}
							</div>
							
							<div className='flex items-center w-full h-[63px] lg:h-[106px]
							bg-white shadow-lg rounded-lg px-[17px] lg:px-[28px] mb-[23px] lg:mb-[28px]'>
								<h2 className='font-bold text-title text-[35px] lg:text-[60px] inline'>
									02
								</h2>
								<span className='lg:ml-8 ml-3.5 font-bold text-basic text-[16px] lg:text-[28px]'>
									Low self-esteem
								</span>
							</div>
							
							<div className='flex items-center w-full h-[63px] lg:h-[106px]
							bg-white shadow-lg rounded-lg px-[17px] lg:px-[28px] mb-[23px] lg:mb-[28px]'>
								<h2 className='font-bold text-title text-[35px] lg:text-[60px] inline'>
									03
								</h2>
								<span className='lg:ml-8 ml-3.5 font-bold text-basic text-[16px] lg:text-[28px]'>
									Desiring a better look
								</span>
							</div>
						
						</div>
						
					</div>
					
					
					<div className='lg:basis-1/2 basis-1 hidden lg:inline pl-4'>
						{cardImage()}
					</div>
				
				</div>
				
			</div>
			
		</div>
		
  )
}
export default WhyDoYou
