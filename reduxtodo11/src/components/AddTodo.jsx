import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../feature/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  // const [editMode, setEditMode] = useState(false);
  const editMode = useSelector(state => state.edit);

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    editMode.id === null ? dispatch(addTodo(input)) : dispatch(updateTodo({id: editMode.id, text: input }))
    setInput("");
  };


  useEffect(() => {
    setInput(editMode.text)
  }, [editMode]);

  return (
    <>
      <div className="flex flex-wrap p-3 m-3 justify-center">
        <h1 className="text-black dark:text-white font-bold text-3xl">
          Redux Todo Web Page
        </h1>
      </div>
      <form
        onSubmit={addTodoHandler}
        className="flex justify-center items-center w-full p-6 gap-2"
      >
        <input
          type="text"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 w-[30rem] dark:text-white text-black dark:bg-slate-800 bg-white"
        />
        <button
          className="p-3 focus:outline-none dark:bg-red-500 bg-black rounded dark:text-white text-black dark:hover:bg-red-600 hover:bg-slate-950"
          type="submit"
        >
          {editMode.id == null ? "Add Todo" : "Update Todo"}
        </button>
      </form>
    </>
  );
};

export default AddTodo;
