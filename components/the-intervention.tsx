import Image from 'next/image';
import image_01 from '../public/resources/Trazado 344.png';
import image_02 from '../public/resources/Trazado 384.png';
import image_03 from '../public/resources/Trazado 305.png';

const TheIntervention = () => {
  return (
		<div className='flex justify-center  px-[38px]   mb-[92px] lg:mb-[139px]'>
			<div className='flex flex-col justify-center lg:max-w-[1363px] w-full'>
				
				<div className='flex flex-row justify-center lg:mb-[17px] mb-[19px]'>
					<h2 className='text-title font-normal lg:text-6xl text-[40px] leading-[51px] lg:leading-[76px] mb-[19px] lg:mb-[17px]'>
						Risks of the intervention
					</h2>
				</div>
				
				<div className='flex flex-row justify-center mb-[30px]'>
					<p className='text-basic max-w-[776px] lg:text-center lg:text-[24px] text-[18px]'>
						No intervention is without risk, but in the case of rhinoplasty these are not serious, the most common are:
					</p>
				</div>
				<div className='flex lg:flex-row flex-col w-full justify-center'>
					
					<div className='lg:basis-1/3 basis-1 flex justify-center lg:px-4'>
						<div className='flex items-center w-full h-[120px] lg:h-[151px]
							 bg-white shadow-lg rounded-lg lg:px-[28px] px-[25px] mb-[34px] lg:mb-[28px]'>
							<div className='bg-title-light flex items-center justify-center rounded-full lg:w-[110px] lg:h-[110px] inline'>
								<Image src={image_01} alt='' ></Image>
							</div>
							
							<span className='lg:ml-8 ml-3.5 text-title font-bold text-[19px] lg:text-[24px]'>
									Bleeding
								</span>
						</div>
					</div>
					
					<div className='lg:basis-1/3 basis-1 flex justify-center lg:px-4'>
						<div className='flex items-center w-full h-[120px] lg:h-[151px]
							 bg-white shadow-lg rounded-lg lg:px-[28px] px-[25px] mb-[34px] lg:mb-[28px]'>
							<div className='bg-title-light flex items-center justify-center rounded-full lg:w-[110px] lg:h-[110px] inline'>
								<Image src={image_02} alt='' ></Image>
							</div>
							
							<span className='lg:ml-8 ml-3.5 text-title font-bold text-[19px] lg:text-[24px]'>
									 Inflammation
								</span>
						</div>
					</div>
					
					<div className='lg:basis-1/3 basis-1 flex justify-center lg:px-4'>
						<div className='flex items-center w-full h-[120px] lg:h-[151px]
							 bg-white shadow-lg rounded-lg lg:px-[28px] px-[25px] mb-[34px] lg:mb-[28px]'>
							<div className='bg-title-light flex items-center justify-center rounded-full lg:w-[110px] lg:h-[110px] inline'>
								<Image src={image_03} alt='' ></Image>
							</div>
							
							<span className='lg:ml-8 ml-3.5 text-title font-bold text-[19px] lg:text-[24px]'>
									Possible adversereaction to anesthesia
								</span>
						</div>
					</div>
					
					
				</div>
				<div className='flex flex-row justify-center'>
					<p className='text-basic max-w-[776px] lg:text-center lg:text-[24px] text-[18px]'>
						However, at Queen Catalina’s, we have a high complexity clinic with infrastructure and trained personnel
						to provide complex care and safe treatment to our patients in an emergency.
					</p>
				</div>
				
			</div>
		</div>
  )
}
export default TheIntervention;
