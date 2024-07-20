interface ProgressProps {
  progress: number;
  total: number;
}

export const Progress = ({ progress, total }: ProgressProps) => {
  const circles = [];

  for (let i = 0; i < total; i++) {
    circles.push(
      <div
        key={i}
        className={`circle ${i < progress ? 'completed' : 'uncompleted'} ${i === progress ? 'current' : ''}`}
      >
        {i+1}
      </div>
    );
  }

  return (
    <div className="progress-bar">
      {progress !== total ? (
        <>
          <div className="line"></div>
          <div className="circles-container">
            {circles}
          </div>
        </>
      ) : (
        <h3>
          Quiz finished!
        </h3>
      )}
    </div>
  );
};
