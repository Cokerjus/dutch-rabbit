import { IoMdClose } from "react-icons/io";

interface IModal {
  showModal: boolean;
  handleClose: () => void;
}

const Modal = ({ showModal, handleClose }: IModal) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/*content*/}
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="
              translate h-auto border-0 rounded-lg shadow-lg relative flex flex-col 
              w-full bg-white outline-none focus:outline-none"
            >
              {/*header*/}
              <div className="flex items-center justify-center p-6 border-b-[1px] relative rounded-t">
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
