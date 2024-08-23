.tree-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f7f7f7;
  perspective: 1500px; /* Perspective for 3D effect */
}

.tree-card {
  width: 100%;
  max-width: 320px; /* Base width for cards */
  height: 300px; /* Increased height to accommodate content */
  background: #ffffff;
  border: 4px solid #fbbf24;
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  transform: rotateY(0deg) rotateX(0deg);
}

.tree-card-content {
  padding: 1rem;
  background: linear-gradient(to bottom right, #ffffff, #e2e8f0);
  border-radius: 15px;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateZ(50px); /* Adds depth */
}

.tree-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;
}

.tree-card-text {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1rem;
}

.tree-card-text p {
  margin: 0.5rem 0;
}

.tree-card-button {
  background-color: #fbbf24;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tree-card-button:hover {
  background-color: #f59e0b;
}

/* 3D Rotation Animation */
.tree-card-animate {
  animation: rotateCard 10s infinite linear;
}

@keyframes rotateCard {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  50% {
    transform: rotateY(180deg) rotateX(20deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(0deg);
  }
}

/* Level Adjustments */
.tree-level {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.tree-node-container {
  margin: 0 1rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .tree-card {
    max-width: 280px; /* Adjust card width for medium screens */
    height: 250px; /* Adjust height */
  }

  .tree-card-title {
    font-size: 1.25rem;
  }

  .tree-card-text {
    font-size: 0.875rem;
  }

  .tree-card-button {
    font-size: 0.875rem;
  }

  .tree-node-container {
    margin: 0 0.5rem; /* Reduced margin for medium screens */
  }
}

@media (max-width: 768px) {
  .tree-card {
    max-width: 240px; /* Further adjust card width for small screens */
    height: 220px; /* Further adjust height */
  }

  .tree-card-title {
    font-size: 1.125rem;
  }

  .tree-card-text {
    font-size: 0.75rem;
  }

  .tree-card-button {
    font-size: 0.75rem;
  }

  .tree-node-container {
    margin: 0 0.5rem; /* Adjust margin for small screens */
  }
}

@media (max-width: 480px) {
  .tree-card {
    max-width: 200px; /* Adjust card width for extra small screens */
    height: 200px; /* Adjust height */
  }

  .tree-card-title {
    font-size: 1rem;
  }

  .tree-card-text {
    font-size: 0.65rem;
  }

  .tree-card-button {
    font-size: 0.65rem;
  }

  .tree-node-container {
    margin: 0 0.25rem; /* Adjust margin for extra small screens */
  }
}
