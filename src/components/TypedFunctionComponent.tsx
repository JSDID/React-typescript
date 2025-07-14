import React from "react";

// Типизация функции: принимает строку, возвращает число
function getStringLength(str: string): number {
  return str.length;
}

const TypedFunctionComponent: React.FC = () => {
  const example = "Пример";
  const length = getStringLength(example);

  return (
    <div>
      <p>Строка: {example}</p>
      <p>Длина строки: {length}</p>
    </div>
  );
};

export default TypedFunctionComponent; 