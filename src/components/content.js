import Language from "./language";

export default function MainContent({ children }) {
  return (
    <div
      className=" m-5"
      //   style={{
      //     padding: 24,
      //     minHeight: 160,
      //     background: "rgba(255, 255, 255, 1)",
      //   }}
    >
      <div className="h-20px">
        <div className="grid grid-cols-8 gap-4">
          {/* <div className="col-start-1 col-end-1">01</div> */}
          <div className="col-end-9">
            <Language />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
