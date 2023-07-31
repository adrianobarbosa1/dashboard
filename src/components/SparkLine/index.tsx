const Sparkline = ({ data, width, height }) => {
  // Faça aqui a lógica para desenhar o Sparkline com base nos dados fornecidos
  // Você pode usar SVG ou outras bibliotecas de gráficos como D3.js ou Recharts

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Insira aqui a lógica para desenhar o Sparkline */}
      {/* Exemplo de linha reta simples */}
      {data.map((point, index) => (
        <line
          key={index}
          x1={(width / (data.length - 1)) * index}
          y1={height - point}
          x2={(width / (data.length - 1)) * (index + 1)}
          y2={height - data[index + 1]}
          stroke="#0000ff"
        />
      ))}
    </svg>
  );
};

export default Sparkline;
