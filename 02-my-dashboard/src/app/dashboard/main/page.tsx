// import { SimpleWidget } from '../../../components/dashboard/SimpleWidget';
import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';


export const metadata = {
 title: 'Admin dashboard',
 description: 'Admin dashboard description',
};
export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetsGrid />
    </div>
  );
}