const Home = () => {
  return (
    <div className={"relative min-h-screen text-gray-600 flex flex-col"}>
      <main className={"px-8 lg:px-16"}>
        <div className={"text-center mt-12"}>
          <h1 className={"text-2xl"}>
            あなたの文章を
            <span className={"dot-text"}>い</span>
            <span className={"dot-text"}>い</span>
            <span className={"dot-text"}>感</span>
            <span className={"dot-text"}>じ</span>に変換します
          </h1>
        </div>
        <div
          className={
            "mt-16 flex flex-col justify-center space-x-0 space-y-16 lg:space-x-16 lg:space-y-0 lg:flex-row"
          }
        >
          <div className={"lg:w-1/2"}>
            <h2 className={"text-2xl text-center font-semibold"}>Before</h2>
            <div className={"mt-4 p-6 text-box lg:p-12 lg:mt-8"}>
              <textarea
                placeholder="テキストを入力してください"
                className={
                  "w-full h-36 rounded text-lg border-2 border-gray-200 focus:border-gray-300"
                }
              ></textarea>
            </div>
          </div>
          <div className={"lg:w-1/2"}>
            <h2 className={"text-2xl text-center font-semibold"}>After</h2>
            <div className={"mt-4 p-6 text-box lg:p-12 lg:mt-8"}>
              <textarea
                placeholder="変換後のテキストはここに表示されます"
                readOnly={true}
                className={
                  "w-full h-36 rounded text-lg border-2 border-gray-200"
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div className={"text-center mt-16 pb-32"}>
          <button
            className={
              "text-xl btn-base w-40 h-14 shadow-off transition transform-300 active:shadow-on"
            }
          >
            変換
          </button>
        </div>
      </main>
      <footer
        className={"absolute w-full bottom-0 text-center bg-gray-300 py-4"}
      >
        <p>Powered by &copy; tksx1227</p>
      </footer>
    </div>
  );
};

export default Home;
