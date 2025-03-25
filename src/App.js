import React, { useState, useEffect } from 'react';
import './App.css';
import workflowData from './workflowData';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState(workflowData);
  const [inputValues, setInputValues] = useState({});
  const [promptTemplate, setPromptTemplate] = useState('');

  useEffect(() => {
    // Reset input values when changing steps
    setInputValues({});
    
    // Set the initial prompt template
    setPromptTemplate(steps[activeStep].promptTemplate);
  }, [activeStep, steps]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    window.scrollTo(0, 0);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleInputChange = (label, value) => {
    setInputValues({
      ...inputValues,
      [label]: value
    });
  };
  
  const updatePromptTemplate = () => {
    let updatedTemplate = steps[activeStep].promptTemplate;
    
    // 创建一个映射表，将输入标签映射到提示词模板中的占位符
    const placeholderMap = {
      // 需求和架构规划
      "你的项目简述（1-2句话）": "项目描述",
      "主要功能列表": "主要功能列表",
      
      // 知识管理策略
      "项目名称": "项目名称",
      
      // 模块化开发
      "模块ID/名称": "特定模块ID",
      "模块功能描述": "模块功能描述",
      
      // 外部依赖管理
      "模块/功能名称": "模块/功能",
      "已考虑使用的依赖（可选）": "依赖列表",
      
      // 集成策略
      "模块A（被集成的模块）": "模块A",
      "模块B（集成目标模块）": "模块B",
      
      // 测试框架
      "组件/模块名称": "组件",
      
      // 人工验证检查点
      "模块/功能名称": "模块/功能",
      
      // Bug修复协议
      "Bug描述": "描述",
      
      // 根本原因分析框架
      "问题描述": "问题描述",
      
      // 代码审查清单
      "代码或模块描述": "代码实现",
      
      // UI/UX验证协议
      "UI组件/页面名称": "UI组件/页面",
      
      // 项目审查与改进
      "项目/代码库名称": "项目/代码库",
      
      // 部署与运维策略
      "项目名称": "项目",
      
      // 持续集成与部署
      "项目描述": "项目"
    };
    
    // 替换所有占位符
    Object.keys(inputValues).forEach(label => {
      if (inputValues[label] && inputValues[label].trim() !== '') {
        // 获取该标签对应的占位符
        const placeholder = placeholderMap[label] || label.split('（')[0].trim();
        
        // 创建正则表达式查找占位符
        const regex = new RegExp(`\\[.*?${placeholder}.*?\\]`, 'g');
        
        // 替换所有出现的占位符
        updatedTemplate = updatedTemplate.replace(regex, inputValues[label].trim());
      }
    });
    
    // 检查是否需要更新模板结构以包含所有输入字段
    if (activeStep === 0) { // 需求和架构规划步骤
      // 检查是否已包含主要功能列表
      if (!updatedTemplate.includes("[主要功能列表]") && 
          inputValues["主要功能列表"] && 
          inputValues["主要功能列表"].trim() !== '') {
        // 添加主要功能列表部分
        updatedTemplate += "\n\n主要功能列表：\n" + inputValues["主要功能列表"].trim();
      }
    }
    
    // 更多特殊情况处理可以在这里添加
    
    setPromptTemplate(updatedTemplate);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('提示词已复制到剪贴板!');
      })
      .catch(err => {
        console.error('无法复制文本: ', err);
      });
  };

  const currentStep = steps[activeStep];

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>LLM 辅助开发向导</h1>
        <ul className="nav-list">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`nav-item ${index === activeStep ? 'active' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              <span className="step-number">{index + 1}</span>
              {step.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="step-content">
          <div className="step-header">
            <h2>{currentStep.title}</h2>
            <p>{currentStep.description}</p>
          </div>

          {currentStep.inputs && currentStep.inputs.length > 0 && (
            <div className="step-section">
              <h3>需要准备的信息</h3>
              <div className="input-area">
                {currentStep.inputs.map((input, index) => (
                  <div key={index} className="input-field">
                    <label>{input.label}</label>
                    <textarea 
                      placeholder={input.placeholder}
                      value={inputValues[input.label] || ''}
                      onChange={(e) => handleInputChange(input.label, e.target.value)}
                    />
                  </div>
                ))}
                <button 
                  className="update-btn"
                  onClick={updatePromptTemplate}
                >
                  更新提示词
                </button>
              </div>
            </div>
          )}

          <div className="step-section">
            <h3>提示词模板</h3>
            <div className="prompt-template">
              <pre>{promptTemplate}</pre>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(promptTemplate)}
              >
                复制
              </button>
            </div>
            <div className="alert alert-info">
              填写上方的信息并点击"更新提示词"后，[方括号]中的内容会自动替换。然后点击"复制"按钮将提示词复制到Cursor中。
            </div>
          </div>

          <div className="step-section">
            <h3>下一步操作</h3>
            <div className="next-actions">
              <h4>操作指南：</h4>
              <ul>
                {currentStep.nextActions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="step-section">
            <h3>常见问题与注意事项</h3>
            <div className="faq-section">
              <h4>使用提示：</h4>
              <ul className="faq-list">
                {currentStep.faqs.map((faq, index) => (
                  <li key={index}>{faq}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="navigation-btns">
            <button 
              className="nav-btn"
              onClick={handlePrevStep}
              disabled={activeStep === 0}
            >
              上一步
            </button>
            <button 
              className="nav-btn"
              onClick={handleNextStep}
              disabled={activeStep === steps.length - 1}
            >
              下一步
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;