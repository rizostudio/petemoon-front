import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useFormik } from "formik";
//components
import FloatLabelInput from "../../components/common/input";
import DashboardLayout from '../../components/DashboardLayout';
//media
import PetPic from '../../assets/dashboard/PetPic.svg';
import PetPicPreserve from '../../assets/dashboard/PetPicPreserve.svg';
import Upload_Icon from '../../assets/common/uploadIcon.svg';
import ArrowLeftWhite_Icon from '../../assets/common/leftArrowWhite.svg';

const MyPetEdit = () => {
    const [inputError, setInputError] = useState(false);
    const formikGeneral = useFormik({
        initialValues: {
            name: "",
            petType: "", 
            sex: "",
            birthDate: "",
            breed: "",
        },
        onSubmit: (value) => {
          console.log(value);
        },
      });

    const [tab,setTab] = useState("general") //toggle between general and medical details

    return (
        <DashboardLayout>
            <div className='flex flex-col w-full'>
                {/* for show heading in this page */}
                <div className='w-full flex lg:hidden flex-row justify-between items-center mb-10'>
                    <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>ویرایش پت من</p>
                    <Link 
                        href='/dashboard/my-pets' 
                        className='bg-primary opacity-[0.8] p-4 rounded-[15px]'
                    >
                        {/* <Image 
                            src={ArrowLeftWhite_Icon} 
                            alt="ArrowIcon" 
                            className='w-full'
                        /> */}
                    </Link>
                </div>
                
                <div className='flex flex-col bg-[#E7E7E8] rounded-[20px] lg:rounded-[25px] w-full'>
                    <div className='w-full h-full px-4 pt-10 pb-5 lg:p-10 lg:rounded-[25px] lg:bg-white'>
                        {/* general details */}
                        <form 
                            onSubmit={formik.handleSubmit}
                            className='flex flex-col lg:flex-row justify-start lg:justify-between h-full'
                        >
                            <div className='flex flex-col items-stretch w-full lg:w-2/3'>
                                {/* General Details */}
                                <div className='lg:flex flex-row justify-between items-center w-full'>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>نام</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"نام"}
                                            name="name"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.name}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                        >نوع</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"نوع"}
                                            name="petType"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.petType}
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
                                <div className='lg:flex flex-row justify-between items-center w-full lg:my-5'>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                        >نژاد</label>
                                        <FloatLabelInput
                                            type={""}
                                            placeholder={"نژاد"}
                                            name="breed"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.breed}
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
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>جنسیت</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"جنسیت"}
                                            name="sex"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.sex}
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
                                <div className='text-right mb-4 lg:m-1'>
                                    <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>تاریخ تولد</label>
                                    <FloatLabelInput
                                        type={"date"}
                                        placeholder={"تاریخ تولد"}
                                        name="birthDate"
                                        onChange={formikGeneral.handleChange}
                                        value={formikGeneral.values.birthDate}
                                        h={"h-12"}
                                        py={"3"}
                                        dir={"ltr"}
                                    />
                                    {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                </div>
                                {/* Medical Details  */}
                                <div className='lg:flex flex-row justify-between items-center w-full'>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>وزن</label>
                                        <FloatLabelInput
                                            type={"number"}
                                            placeholder={"وزن"}
                                            name="PetName"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.primaryname}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                        >بیماری زمینه ای</label>
                                        <FloatLabelInput
                                            type={"text"}
                                            placeholder={"بیماری زمینه ای"}
                                            name="Disease"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.primaryname}
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
                                <div className='lg:flex flex-row justify-between items-center w-full lg:my-5'>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                        >تاریخ آخرین واکسن</label>
                                        <FloatLabelInput
                                            type={"date"}
                                            placeholder={"تاریخ آخرین واکسن"}
                                            name="latestVaccinateDate"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.primaryname}
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>تاریخ آخرین واکسن ضد انگل</label>
                                        <FloatLabelInput
                                            type={"date"}
                                            placeholder={"تاریخ آخرین واکسن ضد انگل"}
                                            name="latestAntiParasiteVaccinateDate"
                                            onChange={formikGeneral.handleChange}
                                            value={formikGeneral.values.primaryname}
                                            list="sexes"
                                            h={"h-12"}
                                            py={"3"}
                                            dir={"rtl"}
                                        />
                                        <datalist id="sexes">
                                            <option>نر</option>
                                            <option>ماده</option>
                                        </datalist>
                                        {inputError && 
                                            <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>
                                        }                 
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between items-stretch h-full w-full lg:w-1/3 lg:mr-6'>
                                <div className='flex flex-col'> 
                                    <div className='w-full h-[175px] relative my-4 lg:my-1 p-4 bg-secondary rounded-[15px] lg:rounded-[25px] overflow-hidden'>
                                        <Image 
                                            src={PetPicPreserve} 
                                            alt="PetPic" 
                                            className='w-full h-full object-contain'
                                        />
                                        <Image 
                                            src={Upload_Icon} 
                                            alt="UploadIcon" 
                                            className='absolute bottom-4 right-4'
                                        />
                                    </div>
                                    <p className='text-sm text-info text-right font-medium leading-4'><bdi>حداکثر سایز تصویر ۲ مگابایت</bdi></p>
                                </div>
                                <div className='flex justify-between items-stretch mt-10 lg:mt-6'>
                                    <Link 
                                        href={'/dashboard/my-pets'} 
                                        className='hidden lg:block text-lg text-error text-center font-medium leading-8 p-3 lg:ml-2 lg:px-4 border-[1px] solid border-error rounded-[5px]'
                                    >انصراف</Link>
                                    <button 
                                        type='submit' 
                                        className='w-full text-lg lg:text-xl text-black text-center font-medium leading-8 p-3 lg:px-15 lg:py-2 bg-[#CFEBD8] border-[1px] border-verify rounded-[12px] lg:rounded-[5px]'
                                    >ذخیره</button>
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