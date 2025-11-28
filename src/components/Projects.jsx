import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: '고객 이탈 예측 모델',
      description: '머신러닝을 활용한 텔레콤 고객 이탈 예측 모델 개발',
      details: 'XGBoost와 로지스틱 회귀를 이용해 고객 이탈 예측 정확도 87% 달성',
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
      impact: '마케팅 부서의 타겟팅 정확도 35% 향상',
      github: 'https://github.com/todaycodes/',
      demo: '#'
    },
    {
      title: '판매 데이터 분석 및 시각화',
      description: 'Tableau를 활용한 종합 판매 분석 대시보드 구축',
      details: '연간 판매 추이, 지역별 성과, 제품별 매출 분석을 종합적으로 시각화',
      tech: ['SQL', 'Tableau', 'Python', 'Excel'],
      impact: '의사결정 시간 40% 단축',
      github: 'https://github.com/todaycodes/',
      demo: '#'
    },
    {
      title: '시계열 예측 모델 - 주가 분석',
      description: '시계열 분석을 통한 주가 추세 예측 모델',
      details: 'ARIMA와 LSTM을 결합한 하이브리드 모델로 예측 정확도 84% 달성',
      tech: ['Python', 'TensorFlow', 'LSTM', 'Statsmodels'],
      impact: '투자 의사결정 신뢰도 향상',
      github: 'https://github.com/todaycodes/',
      demo: '#'
    },
    {
      title: '추천 시스템 개발',
      description: '협업 필터링을 이용한 제품 추천 시스템',
      details: '사용자 행동 데이터를 기반으로 개인화된 제품 추천',
      tech: ['Python', 'Scikit-learn', 'Surprise', 'SQL'],
      impact: '사용자 구매 전환율 28% 증가',
      github: 'https://github.com/todaycodes/',
      demo: '#'
    },
    {
      title: '자연어처리 감정 분석',
      description: '소셜 미디어 감정 분석 프로젝트',
      details: 'BERT와 Transformers를 활용한 다국어 감정 분석 모델',
      tech: ['Python', 'NLP', 'BERT', 'PyTorch'],
      impact: '고객 피드백 분석 자동화',
      github: 'https://github.com/todaycodes/',
      demo: '#'
    },
    {
      title: '이상 탐지 시스템',
      description: '네트워크 트래픽 이상 탐지 모델',
      details: '비지도 학습(Isolation Forest)을 활용한 실시간 이상 탐지',
      tech: ['Python', 'Scikit-learn', 'NumPy', 'AWS'],
      impact: '보안 위협 조기 감지율 92%',
      github: 'https://github.com/todaycodes/',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">주요 프로젝트</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="card flex flex-col">
              <h3 className="text-xl font-bold text-secondary mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-3 text-sm">
                {project.description}
              </p>

              <p className="text-gray-700 mb-4 flex-grow">
                {project.details}
              </p>

              <div className="mb-4 p-3 bg-blue-50 rounded">
                <p className="text-sm font-semibold text-primary">
                  💡 {project.impact}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 font-semibold mb-2">기술 스택</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-primary hover:text-blue-700 transition"
                >
                  <FiGithub size={18} />
                  <span className="text-sm">코드</span>
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 text-primary hover:text-blue-700 transition"
                >
                  <FiExternalLink size={18} />
                  <span className="text-sm">데모</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
