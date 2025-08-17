interface ToastProps {
  copied: string;
  toastVisible: boolean;
};

export default function Toast({ copied, toastVisible }: ToastProps) {

  return (
    <>
      {toastVisible && (
        <div
          className={`fixed bottom-4 right-4 z-20 py-2 px-6 text-white rounded-md bg-sky-500 text-sm`}
        >
          <span className="italic">Copied</span> <code>.{copied}</code>
        </div>
      )}
    </>
  );
}
