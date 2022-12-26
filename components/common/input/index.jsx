export default function FloatLabelInput() {
  return (
    <div class="relative">
      <input
        type="text"
        id="floating_outlined"
        class="block px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
      />
      <label
        for="floating_outlined"
        class="absolute text-sm text-[#9B9BA1] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 focus:right-0 right-1"
      >
        Floating outlined
      </label>
    </div>
  );
}
