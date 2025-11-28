import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DS Portfolio</h3>
            <p className="text-gray-400">
              데이터로 세상을 더 나은 곳으로 만드는 데이터 사이언티스트입니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">링크</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">소셜</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com/todaycodes/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="https://kaggle.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Kaggle</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 mb-4">© {currentYear} Data Scientist Portfolio. All rights reserved.</p>
          <p className="text-center text-red-500 font-semibold text-lg">
            ⚠️ 이 사이트는 포트폴리오 웹사이트 예시로 제작된 샘플 사이트입니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
