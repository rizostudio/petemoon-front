import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useFormik } from "formik";
import FloatLabelInput from "../../components/common/input";
import DashboardLayout from '../../components/DashboardLayout';
import ArrowLeftWhite_Icon from '../../asset/icons/Arrow-left-white.svg';
import PetPic from '../../asset/icons/PetPic.svg';
import PetPicPreserve from '../../asset/icons/PetPicPreserve.svg';
import Upload_Icon from '../../asset/icons/uploadIcon.svg';
const MyPetEdit = () => {
    const [inputError, setInputError] = useState(false)
    const formik = useFormik({
        initialValues: {
          phoneNumber: "",
        },
        onSubmit: (value) => {
          console.log(value);
        },
      });
    const [tab,setTab] = useState("general")
    return (
        <DashboardLayout>
            <div className='flex flex-col w-full'>
                <div className='w-full flex lg:hidden flex-row-reverse justify-between items-center mb-10'>
                    <p className='text-lg text-black font-black leading-7 align-middle after:inline-block after:w-2 after:h-5 after:bg-first after:ml-1 after:rounded-[2px]'>ویرایش پت من</p>
                    <Link href='/dashboard/my-pets' className='bg-first opacity-[0.8] p-4 rounded-[15px]'>
                        <Image src={ArrowLeftWhite_Icon} alt="ArrowIcon" className='w-full'/>
                    </Link>
                </div>
                <div className='flex flex-col bg-[#E7E7E8] rounded-[20px] lg:rounded-[25px] w-full'>
                    <div className="tabs self-center flex flex-row-reverse justify-center lg:justify-start w-full lg:self-end my-3 lg:px-8 lg:my-8 border-b-[1px] solid border-white">
                            <a className={clsx("tab tab-bordered border-white w-1/2 lg:w-auto text-xl font-black leading-10",{
                                'tab-active' : tab == "general"
                            })} onClick={() => setTab("general")}>عمومی</a> 
                            <a className={clsx("tab tab-bordered border-white w-1/2 lg:w-auto text-xl font-black leading-10",{
                                'tab-active' : tab == "medical"
                            })} onClick={() => setTab("medical")}>پزشکی</a>
                    </div>
                    <div className='lg:bg-white px-4 pt-10 pb-5 lg:p-10 lg:mx-10 lg:my-8 lg:rounded-[25px]'>
                        <form onSubmit={formik.handleSubmit}
                            className={clsx('flex flex-col lg:flex-row-reverse justify-start lg:justify-between',{
                                'hidden' : tab !== 'general',
                                'flex': tab == 'general'
                            })}
                        >
                            <div className='flex flex-col items-stretch w-full lg:w-2/3'>
                                <div className='lg:flex flex-row-reverse justify-between items-center w-full'>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'>نام</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"نام"}
                                            name="PetName"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'
                                        >نوع</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"نوع"}
                                            name="kind"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            list={"kinds"}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        <datalist id="kinds">
                                            <option>سگ خانگی</option>
                                            <option>سگ نگهبان</option>
                                            <option>سگ شکاری</option>
                                            <option>سگ امدادگر</option>
                                        </datalist>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }                 
                                    </div>
                                </div>
                                <div className='lg:flex flex-row-reverse justify-between items-center w-full lg:my-5'>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'
                                        >نژاد</label>
                                        <FloatLabelInput
                                            type={""}
                                            placeholder={"نژاد"}
                                            name="race"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            list="races"
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        <datalist id="races">
                                            <option>بولداگ</option>
                                            <option>پودل</option>
                                            <option>پامر</option>
                                            <option>ژپرتون</option>
                                        </datalist>
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'>جنسیت</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"جنسیت"}
                                            name="sex"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            list="sexes"
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        <datalist id="sexes">
                                            <option>نر</option>
                                            <option>ماده</option>
                                        </datalist>
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                </div>
                                <div className='text-right my-4 lg:m-1'>
                                    <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'>تاریخ تولد</label>
                                    <FloatLabelInput
                                        type={"date"}
                                        placeholder={"تاریخ تولد"}
                                        name="birth"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstname}
                                        h={"h-12"}
                                        py={"3"}
                                        dir={"ltr"}
                                    />
                                    {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3 flex flex-col justify-between lg:justify-end items-stretch lg:mr-6'>
                                <div> 
                                    <div className='w-full h-[175px] relative my-4 lg:my-1 p-4 bg-second rounded-[15px] lg:rounded-[25px] overflow-hidden'>
                                        <Image src={PetPicPreserve} alt="PetPic" className='w-full h-full object-contain'/>
                                        <Image src={Upload_Icon} alt="UploadIcon" className='absolute bottom-4 right-4'/>
                                    </div>
                                    <p className='text-sm text-info text-right font-medium leading-4'><bdi>حداکثر سایز تصویر ۲ مگابایت</bdi></p>
                                </div>
                                <div className='w-full flex flex-row mt-10 lg:mt-6'>
                                    <button type='submit' className='w-full text-lg lg:text-xl text-black text-center font-medium leading-8 p-3 lg:px-15 lg:py-2 bg-[#CFEBD8] border-[1px] border-verify rounded-[12px] lg:rounded-[5px]'>ذخیره</button>
                                    <Link href={'/dashboard/my-pets'} className='hidden lg:block text-lg text-error text-center font-medium leading-8 p-3 lg:ml-2 lg:px-4 border-[1px] solid border-error rounded-[5px]'>انصراف</Link>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={formik.handleSubmit}
                            className={clsx('flex flex-col lg:flex-row-reverse justify-start lg:justify-between',{
                                'hidden' : tab !== 'medical',
                                'flex': tab == 'medical'
                            })}
                        >
                            <div className='flex flex-col items-stretch w-full lg:w-2/3'>
                                <div className='lg:flex flex-row-reverse justify-between items-center w-full'>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'>وزن</label>
                                        <FloatLabelInput
                                            type={"number"}
                                            placeholder={"وزن"}
                                            name="PetName"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'
                                        >بیماری زمینه ای</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"بیماری زمینه ای"}
                                            name="Disease"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            list={"Diseases"}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        <datalist id="Diseases">
                                            <option>سرخک حاد</option>
                                            <option>آنلفونزا</option>
                                        </datalist>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }                 
                                    </div>
                                </div>
                                <div className='lg:flex flex-row-reverse justify-between items-center w-full lg:my-5'>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'
                                        >تاریخ آخرین واکسن</label>
                                        <FloatLabelInput
                                            type={"date"}
                                            placeholder={"تاریخ آخرین واکسن"}
                                            name="latestVaccinateDate"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'>تاریخ آخرین واکسن ضد انگل</label>
                                        <FloatLabelInput
                                            type={"date"}
                                            placeholder={"تاریخ آخرین واکسن ضد انگل"}
                                            name="latestAntiParasiteVaccinateDate"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                            list="sexes"
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        <datalist id="sexes">
                                            <option>نر</option>
                                            <option>ماده</option>
                                        </datalist>
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3 flex flex-col justify-between lg:justify-end items-stretch lg:mr-6'>
                                <div> 
                                    <div className='w-full h-[175px] relative my-4 lg:my-1 p-4 bg-second rounded-[15px] lg:rounded-[25px] overflow-hidden'>
                                        <Image src={PetPicPreserve} alt="PetPic" className='w-full h-full object-contain'/>
                                        <Image src={Upload_Icon} alt="UploadIcon" className='absolute bottom-4 right-4'/>
                                    </div>
                                    <p className='text-sm text-info text-right font-medium leading-4'><bdi>حداکثر سایز تصویر ۲ مگابایت</bdi></p>
                                </div>
                                <div className='w-full flex flex-row mt-10 lg:mt-6'>
                                    <button type='submit' className='w-full text-lg lg:text-xl text-black text-center font-medium leading-8 p-3 lg:px-15 lg:py-2 bg-[#CFEBD8] border-[1px] border-verify rounded-[12px] lg:rounded-[5px]'>ذخیره</button>
                                    <Link href={'/dashboard/my-pets'} className='hidden lg:block text-lg text-error text-center font-medium leading-8 p-3 lg:ml-2 lg:px-4 border-[1px] solid border-error rounded-[5px]'>انصراف</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default MyPetEdit;