const FormShopping = () => {
  return (
		<div className='flex justify-center w-full  px-[36px] lg:px-4 mb-[92px] lg:mb-[139px] '>
			<div className='max-w-[1363px] w-full bg-gradient-to-r from-general-1 to-general-2 rounded-md
			pt-[38px] lg:pt-[91px] pb-[34.5px] lg:pb-[74px] px-[18px] lg:px-[158px]'>
				<div className='w-full flex-col flex justify-center'>
					
					<p className='text-white font-bold text-[19px] lg:text-[34px] max-w-[1048px] text-center
					leading-[28.01px] lg:leading-[50.12px] mb-[10px] lg:mb-[17px]'>
						Finding the natural harmony of your face, increasing your confidence, and improving your quality of life is within your reach.
					</p>
					
					<p className='text-white font-[350] text-[19px] lg:text-[24px]
					leading-[28.01px] lg:leading-[35.38px] mb-[48px] lg:mb-[52px] text-center'>
						Schedule your appointment and receive a personalized assessment, relevant information of your interest,
						and the security of making the best investment decision: You.
					</p>
					
					<div className='flex flex-col lg:flex-row mb-[21.5px] lg:mb-[34.5px]'>
						<div className='flex flex-col lg:basis-1/2 basis-1'>
							<input type='text'
							       className='block rounded-lg bg-general-2 text-white dark:placeholder-white
						          pt-[20px] lg:pt-[24px] px-[23px] pb-[19px] mb-[15px] lg:mb-[24px]'
							       placeholder='Name'/>
							<input type='text'
							       className='block rounded-lg bg-general-2 text-white dark:placeholder-white
						          pt-[20px] lg:pt-[24px] px-[23px] pb-[19px] mb-[15px] lg:mb-[24px]'
							       placeholder='Phone'/>
						</div>
						
						<div className='flex flex-col lg:basis-1/2 basis-1'>
							<input type='text'
							       className='block lg:ml-2 rounded-lg bg-general-2 text-white dark:placeholder-white
						         pt-[20px] lg:pt-[24px] px-[23px] pb-[19px] mb-[15px] lg:mb-[24px]'
							       placeholder='Last Name'/>
							<input type='text'
							       className='block lg:hidden lg:ml-2 rounded-lg bg-general-2 text-white dark:placeholder-white
						         pt-[20px] lg:pt-[24px] px-[23px] pb-[19px] mb-[15px] lg:mb-[24px]'
							       placeholder='WhatsApp'/>
							<input type='text'
							       className='block lg:ml-2 rounded-lg bg-general-2 text-white dark:placeholder-white
						         pt-[20px] lg:pt-[24px] px-[23px] pb-[19px] mb-[15px] lg:mb-[24px]'
							       placeholder='Email'/>
							<input type='text'
							       className='block lg:hidden lg:ml-2 rounded-lg bg-general-2 text-white dark:placeholder-white
						         pt-[20px] lg:pt-[24px] px-[23px] pb-[19px] mb-[15px] lg:mb-[24px]'
							       placeholder='Country'/>
						</div>
					</div>
					
				
						<button
							className='bg-white cursor-pointer border w-full flex justify-center
							py-[16px] px-[15px] lg:py-[18px] lg:px-[51px] rounded-xl lg:text-[24px] text-[18px]
							font-bold text-general-1 leading-[26.53px] lg:leading-[35.38px] font-bold'>
							<span className='lg:block hidden text-[24px]'>CONTINUE TO THE SHOPPING EXPERIENCE</span>
							<span className='block lg:hidden text-[20px]'>Schedule your appointment</span>
						</button>
					
					
				</div>
			</div>
		</div>
  )
}
export default FormShopping;
