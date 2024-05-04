// import Drawer from '@/components/dashboard/Navigation/Drawer';
// import Rail from '@/components/dashboard/Navigation/Rail';
import Bar from '@/components/dashboard/Navigation/Bar';
import { Scaffold } from 'material-you-react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="app-root">
      <Scaffold
        // primaryActionPane={<Drawer />}
        // primaryActionPane={<Rail />}
        primaryActionPane={<Bar />}
        appBar={<p>App Bar</p>}
        contentPane={<>{children}</>}
        secondaryActionPane={<p>Secondary Action</p>}
      />
    </div>
  );
}
