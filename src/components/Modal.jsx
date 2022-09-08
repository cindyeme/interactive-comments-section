import { Button } from "./Button";


export const Modal = ({handleCancel, handleConfirmDelete, loading}) => {
  return (
    <div className="bg-black/50 w-full h-full absolute z-20">
      <div className="fixed bg-white rounded-md max-w-sm w-full mx-auto px-5 py-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-xl text-neutral-500">
            Delete comment
          </h3>
          <p className="text-neutral-400">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex items-center space-x-6 md:space-x-8">
            <Button
              text="No, CANCEL"
              className="bg-neutral-400 hover:bg-neutral-500 w-full"
              handleClick={handleCancel}
              disabled={loading}
            />
            <Button
              text={loading ? "DELETING.." : "YES, DELETE"}
              className="bg-primary-200 hover:bg-primary-100 w-full"
              handleClick={handleConfirmDelete}
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}