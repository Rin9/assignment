import { useRouter } from 'next/router';
import UserDetail from '../../src/components/UserDetail/UserDetail';

export default function UserDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  if (id) return <UserDetail id={id} />;
  else return <div>Loading...</div>;
}
