const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800">
      <span className="text-gray-400">
        {` ${computedItemsLeft} ${computedItemsLeft <= 1 ? "item lef" : "items lef"}`}
      </span>
      <button className="flex-none text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
