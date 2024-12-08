import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="max-auto container px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            TODO
          </h1>
          <button>
            <MoonIcon className="fill-red-400" />
          </button>
        </div>
        <form
          action=""
          className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
        >
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="max-auto container mt-8 px-4">
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Completa el curso de JavaScript
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Completa el curso de JavaScript
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Completa el curso de JavaScript
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <section className="flex justify-between px-4 py-4">
            <span className="text-gray-400"> 5 items left</span>
            <button className="flex-none text-gray-400">clear completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="mt-8 text-center">drag and drop to reorder list</p>
    </div>
  );
};

export default App;
