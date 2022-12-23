import { useState, useEffect } from "react";
import { loadProducers } from "../services/carregaDados";

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const producers = loadProducers();
    setTitle(producers.title);
    setList(producers.producersList);
  }, []);

  return [title, list];
}