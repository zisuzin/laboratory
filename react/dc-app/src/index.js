// 리액트 CLI 개발환경에서의 index.js 파일은 애플리케이션의 진입점임!
// -> 이미 전역적으로 사용가능한 상태로 설정된 것이므로, 다른 파일들에서는 import 하지 않아도 된다!!
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Ban from "./dc/Ban";
import {BrowserRouter, Routes, Route} from "react-router-dom"; // 가상돔-실제돔을 연결시켜주는 객체
import Layout from "./dc/Layout";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                {/* 중요! 레이아웃 컴포넌트를 루트로 잡아준다!! */}
                <Route path="/" element={<Layout/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById("root"))
    root.render(
        <Ban cat="main"/>
    );