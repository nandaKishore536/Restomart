import React from "react";
import TaskForm from "../components/TaskForm";
import { useParams } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  return <TaskForm mode="edit" taskId={id} />;
}
