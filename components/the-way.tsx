import image3 from '../public/resources/image 19.png';
import Image from 'next/image';

const TheWay = () => {
  return (
		
			<div className='flex justify-center  px-[38px]   mb-[92px] lg:mb-[139px]'>
				<div className='lg:max-w-[1363px] w-full'>
					
					<div className='flex lg:flex-row flex-col w-full'>
						<div className='lg:basis-1/2 basis-1 mb-5 lg:mb-0'>
							<div className='w-full flex justify-center'>
								<Image src={image3} alt=''/>
							</div>
						</div>
						
						<div className='lg:basis-1/2 basis-1'>
							<div className='w-full lg:pl-8'>
								<h2 className='text-title font-normal lg:text-6xl text-[40px] mb-[14px] lg:mb-[19px] leading-[51px] lg:leading-[76px]'>
									The way we do it
								</h2>
								<p className='text-basic-1 font-bold lg:text-[40px] text-[24px] leading-[35px] lg:leading-[59px] mb-3.5'>
									You may be interested in knowing how the procedure will be carried out
								</p>
								
								<p className='text-basic-1 lg:text-2xl text-lg '>
									Performing a rhinoplasty usually takes us one to two hours, depending on the
									complexity of each intervention. It requires hospital admission and is
									carried out in an operating room, under local or general anesthesia. Our plastic
									surgeon begins the operation by separating the skin of your nose from the bone and
									cartilage that supports it, then they are sculpted according to the characteristics
									of the morphology that you want. Subsequently, the skin is redistributed and sutured.
									
									At the end of the rhinoplasty, a plaster is placed over you nose and both nostrils
									are plugged with cotton to prevent bleeding and stabilize the nasal septum. You will
									be discharged the day after the intervention.
								</p>
							</div>
						
						</div>
					
					</div>
				</div>
		</div>
  )
}
export default TheWay;
