import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

//url주소입력을 통해 cart에 접근하지 않도록 방지
export default function ProtectedRoute({ children, requireAdmin }) {
	const { user } = useAuthContext();
	//로그인한 사용자가 없거나
	//로그인한 사용자가 어드민 권한이 없다면
	//상위 경로로 이동하도록 한다.
	//*지금은 requireAdmin을 별도로 지정해주지 않았음
	if (!user || (requireAdmin && !user.isAdmin)) {
		return <Navigate to='/' replace />;
	}
	//조건에 맞는 경우에만 전달된 children으로 이동
	return children;
}
