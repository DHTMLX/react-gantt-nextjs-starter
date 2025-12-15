import Gantt from '../components/Gantt/Gantt';
import { tasks, links } from '../data/demoData';

export default function HomePage() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Gantt tasks={tasks} links={links} />
    </div>
  );
}
