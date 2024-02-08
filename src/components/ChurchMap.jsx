//church map embedded in the website
export default function ChurchMap() {
  return (
    <div className="mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3942.3682891555827!2d7.8806979!3d8.8452615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1051e4030eb7d7c5%3A0xda9e4a7a29b42f80!2sST.%20PETER%20ANGLICAN%20CHURCH!5e0!3m2!1sen!2sng!4v1704482078971!5m2!1sen!2sng"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 w-[100%] h-[45vh] "
      ></iframe>
    </div>
  );
}
