const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

export default function Backtotop() {
    return (
        <button className="fixed bottom-0 right-0 mb-4 mr-4 text-white rounded-2xl bg-blue-400 px-5 py-3" onClick={scrollToTop}>TOP</button>
    )
  }
  