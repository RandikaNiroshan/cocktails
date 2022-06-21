import React from "react";

const Alcoholic = ({ alcoholic, alt }) => {
  return (
    <>
      <div className={`w-max group-1 h-5 flex place-items-center cursor-pointer drop-shadow-sm bg-app-cadet absolute rounded-md z-[3] active:scale-[0.95] basic-transition ${alt ? "bottom-4 left-4" : " top-4 right-4"}`}>
        <div className="w-5 h-5 p-1 group-hover:rotate-[30deg] basic-transition">
          {alcoholic === "Alcoholic" && (
            <svg className="stroke-white fill-white" viewBox="0 0 64 64">
              <g id="_alcohol" data-name="alcohol">
                <path d="M52,21C52,13.009,50.069,1.329,49.986.835A1,1,0,0,0,49,0H15a1,1,0,0,0-.986.835C13.931,1.329,12,13.009,12,21c0,7.676,1.841,17.729,17,18.887V57a1,1,0,0,1-1,1H23a5.006,5.006,0,0,0-5,5,1,1,0,0,0,1,1H45a1,1,0,0,0,1-1,5.006,5.006,0,0,0-5-5H36a1,1,0,0,1-1-1V39.887C50.159,38.729,52,28.676,52,21ZM15.853,2H48.147c.349,2.233,1.285,8.56,1.676,14.38A5.967,5.967,0,0,0,46,15c-4.38,0-9.283,3.418-11,4.73C33.249,18.418,28.2,15,23,15a15.853,15.853,0,0,0-8.892,2.5C14.443,11.4,15.481,4.378,15.853,2ZM50,21a4,4,0,0,1-4,4c-3.428,0-7.5-2.651-9.356-4C38.5,19.651,42.572,17,46,17A4,4,0,0,1,50,21ZM14,21c0-1.812,4.015-4,9-4,5.559,0,11.3,4.721,11.36,4.768C34.616,21.982,40.7,27,46,27a5.964,5.964,0,0,0,3.668-1.262C48.65,32.143,44.809,38,32,38,16.046,38,14,28.915,14,21ZM36,60h5a3.006,3.006,0,0,1,2.829,2H20.171A3.006,3.006,0,0,1,23,60h5a3,3,0,0,0,3-3V39.981c.331.008.657.019,1,.019s.669-.011,1-.019V57A3,3,0,0,0,36,60Z" />
                <path d="M18.163,6.991A1.039,1.039,0,0,0,18.3,7a1,1,0,0,0,.989-.864l.14-1a1,1,0,0,0-1.981-.282l-.14,1A1,1,0,0,0,18.163,6.991Z" />
                <path d="M17.368,14a.815.815,0,0,0,.1.005,1,1,0,0,0,.994-.9c.134-1.37.287-2.717.44-3.976a1,1,0,1,0-1.985-.242c-.156,1.274-.31,2.637-.445,4.024A1,1,0,0,0,17.368,14Z" />
                <rect x="20" y="22" width="2" height="2" />
                <rect x="18" y="27" width="2" height="2" />
                <rect x="24" y="30" width="2" height="2" />
              </g>
            </svg>
          )}
          {alcoholic === "Non alcoholic" && (
            <svg className="stroke-white fill-white" viewBox="0 0 64 64">
              <g id="_coffee" data-name="coffee">
                <path d="M64,35a8.441,8.441,0,0,0-3.369-7.177c-2.952-2.171-7.216-2.289-10.631-1.9V25a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1V39c0,4,0,6.414,3.293,9.707,1.135,1.135,1.988,3.621,2.438,5.293H1a1,1,0,0,0-.895,1.447L1,57.236A4.972,4.972,0,0,0,5.472,60h4.91l1.723,3.447A1,1,0,0,0,13,64H45a1,1,0,0,0,.9-.553L47.618,60h4.91A4.972,4.972,0,0,0,57,57.236l.894-1.789A1,1,0,0,0,57,54H44.269A19,19,0,0,1,45.8,49.983C52.532,49.738,64,46.4,64,35Zm-4.553-5.565A6.515,6.515,0,0,1,62,35c0,8.959-8.44,12.174-14.5,12.853a10.391,10.391,0,0,0,1.536-2.27C53.5,44.756,60,42.3,60,35a4.545,4.545,0,0,0-1.735-3.952c-2-1.472-5.4-1.452-8.265-1.079V27.937C53.078,27.562,56.938,27.59,59.447,29.435ZM50,39V31.994c3.3-.461,5.863-.231,7.079.665.275.2.921.678.921,2.341,0,5.179-4.135,7.431-8.249,8.391A24.106,24.106,0,0,0,50,39ZM10,26H48v2H10ZM44.382,62H13.618l-1-2H45.382Zm10.829-5.658A2.982,2.982,0,0,1,52.528,58H5.472a2.982,2.982,0,0,1-2.683-1.658L2.618,56H55.382ZM15.8,54c-.388-1.568-1.4-5.012-3.09-6.707C10,44.586,10,42.951,10,39V30H48v9c0,3.951,0,5.586-2.707,8.293-1.7,1.7-2.7,5.139-3.09,6.707Z" />
                <path d="M14,39a1,1,0,0,0-2,0c0,3.844,0,4.757,2.122,6.878a1,1,0,1,0,1.414-1.414C14,42.929,14,42.707,14,39Z" />
                <path d="M13,36a1,1,0,0,0,1-1V34a1,1,0,0,0-2,0v1A1,1,0,0,0,13,36Z" />
                <path d="M14,10a3,3,0,0,1,3,3v2a5.006,5.006,0,0,0,5,5h2a1,1,0,0,0,0-2H22a3,3,0,0,1-3-3V13a5.006,5.006,0,0,0-5-5,3,3,0,0,1-3-3V1A1,1,0,0,0,9,1V5A5.006,5.006,0,0,0,14,10Z" />
                <path d="M23,3h4a2,2,0,0,1,0,4,4,4,0,0,0,0,8h4a1,1,0,0,0,0-2H27a2,2,0,0,1,0-4,4,4,0,0,0,0-8H23a1,1,0,0,0,0,2Z" />
                <path d="M38,18H34a1,1,0,0,0,0,2h4a5,5,0,0,0,0-10,3,3,0,0,1,0-6h4a1,1,0,0,0,0-2H38a5,5,0,0,0,0,10,3,3,0,0,1,0,6Z" />
              </g>
            </svg>
          )}
          {alcoholic === "Optional alcohol" && (
            <svg className="stroke-white fill-white" viewBox="0 0 64 64">
              <g id="_beer" data-name="beer">
                <path d="M57,21H46.2l-.045-.9A7.985,7.985,0,0,0,42.375,6.12,6.985,6.985,0,0,0,32.291,3.069a7.985,7.985,0,0,0-12.814.308A7.98,7.98,0,0,0,8.042,6.066,8.04,8.04,0,0,0,1,14.233a8.124,8.124,0,0,0,6.751,7.652L6.042,56.129A3.993,3.993,0,0,0,7,64H47a3.993,3.993,0,0,0,.958-7.871L47.791,52.8l11.574-4.6A5.992,5.992,0,0,0,63,42.681V27A6.006,6.006,0,0,0,57,21ZM46.6,29H55V41.342l-7.63,3.022Zm-.653,27H8.051l1.7-34.063A7.911,7.911,0,0,0,14,20.245V31a3,3,0,0,0,6,0V23a1,1,0,0,1,2,0v4a3,3,0,0,0,6,0V20.247a8,8,0,0,0,9,.678,7.959,7.959,0,0,0,7.215.395ZM3,14.176a6.023,6.023,0,0,1,5.718-6.16C8.785,8.013,8.967,8,9,8a6,6,0,0,1,3.092.856A.986.986,0,0,0,12.606,9a1,1,0,0,0,.517-1.856,7.941,7.941,0,0,0-2.7-1A5.962,5.962,0,0,1,19.069,5.6a1,1,0,0,0,1.572-.285,5.983,5.983,0,0,1,10.133-.933A6.81,6.81,0,0,0,29.4,6.667a1,1,0,0,0,1.887.666A5.094,5.094,0,0,1,36,4a5,5,0,0,1,4.719,3.361,1,1,0,0,0,.851.668,6,6,0,0,1,5.424,6.239A6.1,6.1,0,0,1,41.2,20a5.944,5.944,0,0,1-3.623-1.077,1,1,0,0,0-1.144,0,5.983,5.983,0,0,1-8.57-1.843A1,1,0,0,0,26,17.592V27a1,1,0,0,1-2,0V23a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V17.592a1,1,0,0,0-.733-.964A1.016,1.016,0,0,0,15,16.592a1,1,0,0,0-.857.485A5.965,5.965,0,0,1,9.1,20,6.078,6.078,0,0,1,3,14.176ZM49,60a2,2,0,0,1-2,2H7a2,2,0,0,1,0-4H47A2,2,0,0,1,49,60ZM61,42.681a3.987,3.987,0,0,1-2.4,3.666L47.686,50.686l-.211-4.212,8.893-3.522a1,1,0,0,0,.632-.93V28a1,1,0,0,0-1-1H46.5l-.2-4H57a4,4,0,0,1,4,4Z" />
                <path d="M20,34a1,1,0,0,0-1,1V50a2,2,0,0,1-4,0V35a1,1,0,0,0-2,0V50a4,4,0,0,0,8,0V35A1,1,0,0,0,20,34Z" />
                <path d="M30,31a1,1,0,0,0-1,1V50a2,2,0,0,1-4,0V32a1,1,0,0,0-2,0V50a4,4,0,0,0,8,0V32A1,1,0,0,0,30,31Z" />
                <path d="M37,24a4,4,0,0,0-4,4V50a4,4,0,0,0,8,0V28A4,4,0,0,0,37,24Zm2,26a2,2,0,0,1-4,0V28a2,2,0,0,1,4,0Z" />
              </g>
            </svg>
          )}
        </div>
        <div className="hidden invisible group-hover:block group-hover:visible basic-transition">
          <p className="text-app-cadet capitalize text-[0px] group-hover:text-white group-hover:text-[10px] font-app-main text-center tracking-wide pb-[1px] pr-2 basic-transition">
            {alcoholic}
          </p>
        </div>
      </div>
    </>
  );
};

export default Alcoholic;