// PM2进程守护配置（备选方案）
// 适用于：Windows服务器、不支持systemd的环境
//
// 使用方法：
//   1. 安装PM2：npm install -g pm2
//   2. 启动服务：pm2 start ecosystem.config.js
//   3. 查看状态：pm2 status
//   4. 查看日志：pm2 logs equestrian-api
//   5. 重启服务：pm2 restart equestrian-api
//   6. 停止服务：pm2 stop equestrian-api
//   7. 开机自启：pm2 startup (首次)
//   8. 保存配置：pm2 save

module.exports = {
  apps: [
    {
      // 应用名称
      name: 'equestrian-api',
      
      // 启动脚本
      script: 'python3',
      args: '-m uvicorn main:app --host 0.0.0.0 --port 8000',
      
      // 工作目录
      cwd: '/var/www/equestrian-web/backend',
      
      // 解释器（Python）
      interpreter: 'none',
      
      // 实例数量（根据CPU核心数调整）
      instances: 2,
      exec_mode: 'cluster',
      
      // 环境变量
      env: {
        NODE_ENV: 'production',
        ENVIRONMENT: 'production',
      },
      
      // 自动重启配置
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      
      // 崩溃重启策略
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000,
      
      // 日志配置
      error_file: '/var/log/equestrian-api/error.log',
      out_file: '/var/log/equestrian-api/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      
      // 时区
      time: true,
    },
  ],
};

// ========================================
// Windows服务器配置（特殊说明）
// ========================================
// Windows上使用PM2需要额外配置：
//
// 1. 安装Python：
//    下载Python 3.11+并安装到C:\Python311
//
// 2. 修改script路径：
//    script: 'C:\\Python311\\python.exe',
//    args: '-m uvicorn main:app --host 0.0.0.0 --port 8000',
//    cwd: 'D:\\equestrian-web\\backend',
//
// 3. 安装pm2-windows-service（开机自启）：
//    npm install -g pm2-windows-service
//    pm2-service-install
//
// 4. 启动服务：
//    pm2 start ecosystem.config.js
//    pm2 save
//
// ========================================
// 常用命令
// ========================================
// 启动：pm2 start ecosystem.config.js
// 停止：pm2 stop equestrian-api
// 重启：pm2 restart equestrian-api
// 删除：pm2 delete equestrian-api
// 状态：pm2 status
// 日志：pm2 logs equestrian-api
// 监控：pm2 monit
// 保存：pm2 save（保存当前进程列表）
// 开机自启：pm2 startup（首次配置）
