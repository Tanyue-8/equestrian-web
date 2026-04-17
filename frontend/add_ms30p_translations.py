#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json, os

MESSAGES_DIR = r"D:\equestrian-web\frontend\messages"

MS30P = {
    "zh": {
        "badge": "HKJC 官方认可",
        "subtitle": "专为职业竞技与高阶训练打造的三项赛模拟器",
        "btnQuote": "获取报价",
        "btnCompare": "对比型号 →",
        "immersive": {
            "tag": "核心特性",
            "title": "高精度生物力学感应",
            "desc": "在马匹头部、腹部配置高灵敏度感应矩阵，实时捕捉骑手重心微调与腿部扶助指令，缰绳拉力感应实现毫秒级动态响应。",
            "tags": ["头部传感器", "腹部传感器", "实时反馈", "生物力学分析"]
        },
        "features": {
            "title": "核心功能",
            "subtitle": "专业级技术，为竞技训练而生",
            "card1": {
                "title": "智能扶助识别",
                "desc": "识别"里怀"扶助指令，通过真实生物力学动作触发精准步态转换与速度变化，支持 Piaffe、Passage 等高阶动作的扶助识别。",
                "tags": ["里怀转换", "Piaffe", "Passage", "步态切换"]
            },
            "card2": {
                "title": "全能三项赛体验",
                "desc": "精准还原慢步、快步、跑步三大基本步态，支持 Piaffe（原地踏步）、Passage（高台步）等盛装舞步高阶动作，及场地障碍赛预设路线模拟。",
                "tags": ["慢步", "快步", "跑步", "Piaffe", "Passage", "场地障碍"]
            },
            "card3": {
                "title": "专业安全系统",
                "desc": "紧急制动装置与软件故障保护双重保障，CE (RED/EMC/LVD) 国际认证，香港赛马会深圳中心官方采用。",
                "tags": ["紧急制动", "CE认证", "HKJC认可"]
            }
        },
        "video": {"title": "产品演示"},
        "specs": {
            "title": "技术规格",
            "left": [
                ["型号", "MS.30P（Horse）"],
                ["定位", "职业级马术模拟器"],
                ["认证", "CE（RED / EMC / LVD）"],
                ["认可机构", "香港赛马会（HKJC）"],
                ["步态模拟", "慢步 / 快步 / 跑步 / Piaffe / Passage"],
                ["机体总长", "2263mm"],
                ["机体宽度", "1122mm"],
                ["机体静止高度", "1750mm"],
                ["底座尺寸", "2100×690mm"],
                ["静止骑座高度", "1500mm"]
            ],
            "right": [
                ["整机重量", "450KG"],
                ["额定承载", "98KG"],
                ["额定电压", "220V AC / 50Hz"],
                ["额定功率", "4.8KW"],
                ["天花板高度要求", "≥3000mm"],
                ["侧面通道空间", "≥300mm"],
                ["前后通道空间", "≥500mm"],
                ["门框宽度（整机）", "≥1222mm"],
                ["门框宽度（拆卸）", "≥800mm"],
                ["工作温度", "5°C — 40°C"],
                ["质保期", "1年"]
            ]
        },
        "whatIs": {
            "title": "MS.30P 专业马术模拟器是什么？",
            "desc": "MS.30P 是一款面向职业竞技与高阶训练场景的专业马术模拟器，搭载 AI 生物力学反馈系统，获香港赛马会（HKJC）官方认可，通过 CE（RED/EMC/LVD）认证。配备 200+ 精密传感器，精准还原慢步、快步、跑步三种步态，支持盛装舞步 Piaffe（原地踏步）与 Passage（高台步）等高阶动作，以及场地障碍赛路线模拟。",
            "stat1": "步态模式",
            "stat2": "精密传感器",
            "stat3": "官方认可"
        },
        "faq": {
            "title": "常见问题解答",
            "items": [
                {"q": "MS.30P 适合哪个年龄段的骑手使用？", "a": "MS.30P 面向10岁以上骑手，尤其适合有一定基础的青少年及成年职业骑手。Piaffe、Passage 等高阶步态功能适合有竞技需求的专业骑手。如需为10岁以下儿童配备，建议选择 MS.30 教学款。"},
                {"q": "安装需要什么场地条件？", "a": "需要最低天花板高度≥3000mm，标准220V/4.8KW电源，整机尺寸2263×1122×1750mm，重量450KG，承载98KG。侧面通道预留≥300mm，前后通道预留≥500mm。整机不拆卸进入需门框宽度≥1222mm，拆卸后≥800mm。"},
                {"q": "模拟马和真马训练有什么区别？", "a": "MS.30P 通过6轴运动平台和200+精密传感器还原真马的生物力学动作，包括 Piaffe、Passage 等高难度步态。它无法复现每匹马的个性差异，但能提供稳定可量化的训练条件——是真马训练的最佳补充，而非替代。"},
                {"q": "AI 系统能提供哪些训练数据？", "a": "每次训练后自动生成报告，涵盖重心平衡分布、骑姿评分、Piaffe/Passage 步态评估及训练进度趋势，支持导出。"},
                {"q": "售后服务和安装包含哪些内容？", "a": "MS.30P 提供1年整机质保，含免费一次上门安装及现场培训。设备底座配备万向轮，可在平坦地面上移动。"}
            ]
        },
        "downloads": {
            "tag": "免费资料下载",
            "title": "获取 Horse-MS.30P 完整资料包",
            "item1": {"label": "产品手册", "title": "完整技术规格书", "desc": "PDF · 约8MB · 中/英双语", "btn": "获取资料 →"},
            "item2": {"label": "官方认证", "title": "CE 认证证书", "desc": "PDF · 官方扫描件 · 欧盟标准", "btn": "申请获取 →"}
        },
        "cta": {
            "title": "对MS.30P感兴趣？",
            "subtitle": "联系我们的团队，获取价格、定制方案和演示预约",
            "btnQuote": "📋 获取报价",
            "btnWhatsapp": "💬 WhatsApp咨询",
            "btnEmail": "✉️ 发送邮件"
        }
    },
    "en": {
        "badge": "HKJC Official Recognition",
        "subtitle": "Professional eventing simulator built for elite competition and advanced training",
        "btnQuote": "Get a Quote",
        "btnCompare": "Compare Models →",
        "immersive": {
            "tag": "Core Feature",
            "title": "High-Precision Biomechanical Sensing",
            "desc": "High-sensitivity sensor arrays at the horse's head and abdomen capture rider weight shifts and leg aid commands in real time, with rein tension sensing delivering millisecond dynamic response.",
            "tags": ["Head Sensors", "Belly Sensors", "Real-time Feedback", "Biomechanical Analysis"]
        },
        "features": {
            "title": "Core Features",
            "subtitle": "Professional-grade technology engineered for competitive training",
            "card1": {
                "title": "Intelligent Aid Recognition",
                "desc": "Recognises inside-leg aids and triggers precise gait transitions and speed changes through real biomechanical motion, supporting advanced movements including Piaffe and Passage.",
                "tags": ["Inside-leg Transition", "Piaffe", "Passage", "Gait Switch"]
            },
            "card2": {
                "title": "Full Eventing Experience",
                "desc": "Accurately reproduces walk, trot and canter, supporting advanced dressage movements including Piaffe and Passage, plus show jumping course simulation.",
                "tags": ["Walk", "Trot", "Canter", "Piaffe", "Passage", "Show Jumping"]
            },
            "card3": {
                "title": "Professional Safety System",
                "desc": "Dual protection with emergency brake and software fault guard. CE (RED/EMC/LVD) certified. Officially adopted by Hong Kong Jockey Club Shenzhen Centre.",
                "tags": ["Emergency Brake", "CE Certified", "HKJC Approved"]
            }
        },
        "video": {"title": "Product Demo"},
        "specs": {
            "title": "Technical Specifications",
            "left": [
                ["Model", "MS.30P (Horse)"],
                ["Category", "Professional Equestrian Simulator"],
                ["Certification", "CE (RED / EMC / LVD)"],
                ["Endorsed by", "Hong Kong Jockey Club (HKJC)"],
                ["Gaits", "Walk / Trot / Canter / Piaffe / Passage"],
                ["Overall Length", "2263mm"],
                ["Overall Width", "1122mm"],
                ["Static Height", "1750mm"],
                ["Base Dimensions", "2100×690mm"],
                ["Saddle Height", "1500mm"]
            ],
            "right": [
                ["Total Weight", "450KG"],
                ["Rated Load", "98KG"],
                ["Power Supply", "220V AC / 50Hz"],
                ["Rated Power", "4.8KW"],
                ["Min. Ceiling Height", "≥3000mm"],
                ["Side Clearance", "≥300mm"],
                ["Front/Rear Clearance", "≥500mm"],
                ["Door Width (assembled)", "≥1222mm"],
                ["Door Width (disassembled)", "≥800mm"],
                ["Operating Temp.", "5°C — 40°C"],
                ["Warranty", "1 Year"]
            ]
        },
        "whatIs": {
            "title": "What is the MS.30P Professional Equestrian Simulator?",
            "desc": "The MS.30P is a professional equestrian simulator designed for elite competition and advanced training. Powered by an AI biomechanical feedback system, it is officially endorsed by the Hong Kong Jockey Club (HKJC) and CE (RED/EMC/LVD) certified. Equipped with 200+ precision sensors, it accurately reproduces walk, trot and canter, and supports advanced dressage movements including Piaffe and Passage, as well as show jumping course simulation.",
            "stat1": "Gait Modes",
            "stat2": "Precision Sensors",
            "stat3": "Official Endorsement"
        },
        "faq": {
            "title": "Frequently Asked Questions",
            "items": [
                {"q": "What age group is the MS.30P suitable for?", "a": "The MS.30P is designed for riders aged 10 and above, particularly intermediate to advanced youth and professional adult riders. The Piaffe and Passage functions are ideal for riders with competitive ambitions. For children under 10, we recommend the MS.30 education model."},
                {"q": "What site conditions are required for installation?", "a": "Minimum ceiling height ≥3000mm, standard 220V/4.8KW power supply. Machine dimensions: 2263×1122×1750mm, weight 450KG, rated load 98KG. Side clearance ≥300mm, front/rear clearance ≥500mm. Door width ≥1222mm (assembled), ≥800mm (disassembled)."},
                {"q": "How does simulator training differ from riding a real horse?", "a": "The MS.30P uses a 6-axis motion platform and 200+ sensors to reproduce the biomechanics of a real horse, including advanced gaits like Piaffe and Passage. While it cannot replicate each horse's individual character, it delivers stable, measurable training conditions — the ideal complement to real horse training."},
                {"q": "What training data does the AI system provide?", "a": "After each session, a report is automatically generated covering weight balance distribution, posture scoring, Piaffe/Passage gait assessment and training progress trends, all exportable."},
                {"q": "What does after-sales service and installation include?", "a": "The MS.30P comes with a 1-year full-machine warranty including one free on-site installation and staff training. The base is fitted with caster wheels for movement on flat surfaces."}
            ]
        },
        "downloads": {
            "tag": "Free Downloads",
            "title": "Get the Complete Horse-MS.30P Resource Pack",
            "item1": {"label": "Product Brochure", "title": "Full Technical Specifications", "desc": "PDF · ~8MB · Bilingual CN/EN", "btn": "Download →"},
            "item2": {"label": "Certification", "title": "CE Certificate", "desc": "PDF · Official Scan · EU Standard", "btn": "Request →"}
        },
        "cta": {
            "title": "Interested in the MS.30P?",
            "subtitle": "Contact our team for pricing, custom solutions and a demo booking",
            "btnQuote": "📋 Get a Quote",
            "btnWhatsapp": "💬 WhatsApp",
            "btnEmail": "✉️ Send Email"
        }
    },
    "ja": {
        "badge": "HKJC 公式認定",
        "subtitle": "プロ競技と上級トレーニングのために設計された総合馬術シミュレーター",
        "btnQuote": "見積もりを依頼する",
        "btnCompare": "モデルを比較する →",
        "immersive": {
            "tag": "コア機能",
            "title": "高精度バイオメカニクスセンシング",
            "desc": "馬の頭部・腹部に高感度センサーアレイを配置し、騎手の重心調整と脚の扶助指示をリアルタイムで捕捉。手綱テンション感知がミリ秒単位のダイナミックレスポンスを実現。",
            "tags": ["頭部センサー", "腹部センサー", "リアルタイムフィードバック", "バイオメカニクス分析"]
        },
        "features": {
            "title": "コア機能",
            "subtitle": "競技トレーニングのために設計されたプロ仕様技術",
            "card1": {
                "title": "インテリジェント扶助認識",
                "desc": "インサイドレッグの扶助を認識し、真のバイオメカニクス動作で正確な歩様転換と速度変化をトリガー。ピアッフェ・パッサージュ等の高度な動作をサポート。",
                "tags": ["インサイド転換", "ピアッフェ", "パッサージュ", "歩様切替"]
            },
            "card2": {
                "title": "完全な総合馬術体験",
                "desc": "常歩・速歩・駈歩を正確に再現。ピアッフェ（その場踏歩）・パッサージュ（高踏歩）等の高度な馬場馬術動作と、障害飛越コースシミュレーションをサポート。",
                "tags": ["常歩", "速歩", "駈歩", "ピアッフェ", "パッサージュ", "障害飛越"]
            },
            "card3": {
                "title": "プロフェッショナル安全システム",
                "desc": "緊急ブレーキとソフトウェア障害保護のデュアル保護。CE（RED/EMC/LVD）認証取得。香港ジョッキークラブ深圳センターに公式採用。",
                "tags": ["緊急ブレーキ", "CE認証", "HKJC認定"]
            }
        },
        "video": {"title": "製品デモ"},
        "specs": {
            "title": "技術仕様",
            "left": [
                ["型番", "MS.30P（Horse）"],
                ["カテゴリー", "プロフェッショナル馬術シミュレーター"],
                ["認証", "CE（RED / EMC / LVD）"],
                ["公認機関", "香港ジョッキークラブ（HKJC）"],
                ["歩様", "常歩 / 速歩 / 駈歩 / ピアッフェ / パッサージュ"],
                ["全長", "2263mm"],
                ["全幅", "1122mm"],
                ["静止高さ", "1750mm"],
                ["ベース寸法", "2100×690mm"],
                ["サドル高さ", "1500mm"]
            ],
            "right": [
                ["総重量", "450KG"],
                ["定格荷重", "98KG"],
                ["電源", "220V AC / 50Hz"],
                ["定格電力", "4.8KW"],
                ["最低天井高", "≥3000mm"],
                ["側面通路幅", "≥300mm"],
                ["前後通路幅", "≥500mm"],
                ["扉幅（組立時）", "≥1222mm"],
                ["扉幅（分解時）", "≥800mm"],
                ["動作温度", "5°C — 40°C"],
                ["保証期間", "1年"]
            ]
        },
        "whatIs": {
            "title": "MS.30P プロフェッショナル馬術シミュレーターとは？",
            "desc": "MS.30Pは、プロ競技と上級トレーニング向けの馬術シミュレーターです。AIバイオメカニクスフィードバックシステムを搭載し、香港ジョッキークラブ（HKJC）の公式認定を受け、CE（RED/EMC/LVD）認証を取得。200+の精密センサーを装備し、常歩・速歩・駈歩を正確に再現するほか、ピアッフェ・パッサージュ等の高度な馬場馬術動作と障害飛越コースシミュレーションをサポート。",
            "stat1": "歩様モード",
            "stat2": "精密センサー",
            "stat3": "公式認定"
        },
        "faq": {
            "title": "よくある質問",
            "items": [
                {"q": "MS.30Pはどの年齢層の騎手に適していますか？", "a": "MS.30Pは10歳以上の騎手向けで、特に中上級の青少年および成人プロライダーに適しています。ピアッフェ・パッサージュ機能は競技志向のライダーに最適です。10歳未満のお子様には教育用MS.30をお勧めします。"},
                {"q": "設置にはどのような場所条件が必要ですか？", "a": "最低天井高≥3000mm、標準220V/4.8KW電源が必要です。本体寸法2263×1122×1750mm、重量450KG、定格荷重98KG。側面通路≥300mm、前後通路≥500mm。扉幅≥1222mm（組立時）、≥800mm（分解時）。"},
                {"q": "シミュレーター訓練と本物の馬での訓練の違いは？", "a": "MS.30Pは6軸モーションプラットフォームと200+センサーで馬のバイオメカニクスを再現。各馬の個性は再現できませんが、安定した定量的な訓練条件を提供します。実馬訓練の最良の補完手段です。"},
                {"q": "AIシステムはどのような訓練データを提供しますか？", "a": "各セッション後に自動でレポートを生成。重心バランス分布、騎乗姿勢スコア、ピアッフェ/パッサージュ評価、訓練進捗トレンドを含み、エクスポート可能です。"},
                {"q": "アフターサービスと設置には何が含まれますか？", "a": "MS.30Pには1年間の整機保証が付属し、無料の出張設置とスタッフトレーニングが1回含まれます。ベースにはキャスターが装備されており、平坦な床面での移動が可能です。"}
            ]
        },
        "downloads": {
            "tag": "無料ダウンロード",
            "title": "Horse-MS.30P 完全資料パックを入手",
            "item1": {"label": "製品カタログ", "title": "完全技術仕様書", "desc": "PDF · 約8MB · 中英バイリンガル", "btn": "ダウンロード →"},
            "item2": {"label": "認証書", "title": "CE認証証書", "desc": "PDF · 公式スキャン · EU基準", "btn": "申請する →"}
        },
        "cta": {
            "title": "MS.30Pに興味がありますか？",
            "subtitle": "価格・カスタムソリューション・デモ予約についてチームにお問い合わせください",
            "btnQuote": "📋 見積もりを依頼",
            "btnWhatsapp": "💬 WhatsApp",
            "btnEmail": "✉️ メールを送る"
        }
    },
    "ko": {
        "badge": "HKJC 공식 인증",
        "subtitle": "엘리트 경기와 고급 훈련을 위해 설계된 전문 마장마술 시뮬레이터",
        "btnQuote": "견적 받기",
        "btnCompare": "모델 비교 →",
        "immersive": {
            "tag": "핵심 기능",
            "title": "고정밀 생체역학 감지",
            "desc": "말의 머리와 복부에 고감도 센서 어레이를 배치하여 기수의 무게 중심 조정과 다리 에이드 명령을 실시간으로 포착. 고삐 장력 감지로 밀리초 단위 동적 반응 구현.",
            "tags": ["머리 센서", "복부 센서", "실시간 피드백", "생체역학 분석"]
        },
        "features": {
            "title": "핵심 기능",
            "subtitle": "경기 훈련을 위한 전문가 수준의 기술",
            "card1": {
                "title": "지능형 에이드 인식",
                "desc": "인사이드 레그 에이드를 인식하고 실제 생체역학 동작으로 정확한 보법 전환과 속도 변화를 트리거. 피아페·파사주 등 고급 동작의 에이드 인식 지원.",
                "tags": ["인사이드 전환", "피아페", "파사주", "보법 전환"]
            },
            "card2": {
                "title": "완전한 종합 마술 경험",
                "desc": "평보·속보·구보를 정확하게 재현하며, 피아페(제자리 답보)·파사주(고답보) 등 고급 마장마술 동작과 장애물 비월 코스 시뮬레이션을 지원.",
                "tags": ["평보", "속보", "구보", "피아페", "파사주", "장애물"]
            },
            "card3": {
                "title": "전문 안전 시스템",
                "desc": "비상 제동 장치와 소프트웨어 고장 보호 이중 보호. CE(RED/EMC/LVD) 국제 인증. 홍콩 조키 클럽 선전 센터 공식 채택.",
                "tags": ["비상 제동", "CE 인증", "HKJC 승인"]
            }
        },
        "video": {"title": "제품 데모"},
        "specs": {
            "title": "기술 사양",
            "left": [
                ["모델", "MS.30P (Horse)"],
                ["카테고리", "전문 마술 시뮬레이터"],
                ["인증", "CE (RED / EMC / LVD)"],
                ["공인 기관", "홍콩 조키 클럽 (HKJC)"],
                ["보법", "평보 / 속보 / 구보 / 피아페 / 파사주"],
                ["전체 길이", "2263mm"],
                ["전체 너비", "1122mm"],
                ["정지 높이", "1750mm"],
                ["베이스 크기", "2100×690mm"],
                ["안장 높이", "1500mm"]
            ],
            "right": [
                ["총 중량", "450KG"],
                ["정격 하중", "98KG"],
                ["전원", "220V AC / 50Hz"],
                ["정격 전력", "4.8KW"],
                ["최소 천장 높이", "≥3000mm"],
                ["측면 통로 폭", "≥300mm"],
                ["전후 통로 폭", "≥500mm"],
                ["문 너비(조립 시)", "≥1222mm"],
                ["문 너비(분리 시)", "≥800mm"],
                ["작동 온도", "5°C — 40°C"],
                ["보증 기간", "1년"]
            ]
        },
        "whatIs": {
            "title": "MS.30P 전문 마술 시뮬레이터란?",
            "desc": "MS.30P는 엘리트 경기와 고급 훈련을 위한 전문 마술 시뮬레이터입니다. AI 생체역학 피드백 시스템을 탑재하고 홍콩 조키 클럽(HKJC)의 공식 인증을 받았으며 CE(RED/EMC/LVD) 인증을 획득했습니다. 200개 이상의 정밀 센서를 장착하여 평보·속보·구보를 정확하게 재현하고 피아페·파사주 등 고급 동작과 장애물 비월 코스 시뮬레이션을 지원합니다.",
            "stat1": "보법 모드",
            "stat2": "정밀 센서",
            "stat3": "공식 인증"
        },
        "faq": {
            "title": "자주 묻는 질문",
            "items": [
                {"q": "MS.30P는 어떤 연령대에 적합한가요?", "a": "MS.30P는 10세 이상의 기수를 위한 것으로, 중고급 청소년 및 성인 전문 기수에게 특히 적합합니다. 피아페·파사주 기능은 경기 지향 기수에게 최적입니다. 10세 미만 어린이에게는 교육용 MS.30을 권장합니다."},
                {"q": "설치에 필요한 장소 조건은 무엇인가요?", "a": "최소 천장 높이 ≥3000mm, 표준 220V/4.8KW 전원이 필요합니다. 기체 크기 2263×1122×1750mm, 중량 450KG, 정격 하중 98KG. 측면 통로 ≥300mm, 전후 통로 ≥500mm. 문 너비 ≥1222mm(조립 시), ≥800mm(분리 시)."},
                {"q": "시뮬레이터 훈련과 실제 말 훈련의 차이는?", "a": "MS.30P는 6축 모션 플랫폼과 200개 이상의 센서로 말의 생체역학을 재현합니다. 각 말의 개성은 재현할 수 없지만 안정적이고 정량화 가능한 훈련 조건을 제공합니다. 실제 말 훈련의 최상의 보완 수단입니다."},
                {"q": "AI 시스템은 어떤 훈련 데이터를 제공하나요?", "a": "각 세션 후 자동으로 보고서가 생성됩니다. 무게 중심 균형 분포, 기승 자세 점수, 피아페/파사주 보법 평가 및 훈련 진도 추이를 포함하며 내보내기가 가능합니다."},
                {"q": "애프터서비스와 설치에는 무엇이 포함되나요?", "a": "MS.30P는 1년 전체 기계 보증을 제공하며 무료 출장 설치 및 현장 교육 1회가 포함됩니다. 베이스에는 캐스터가 장착되어 평평한 바닥에서 이동 가능합니다."}
            ]
        },
        "downloads": {
            "tag": "무료 다운로드",
            "title": "Horse-MS.30P 완전 자료 패키지 받기",
            "item1": {"label": "제품 카탈로그", "title": "완전 기술 사양서", "desc": "PDF · 약 8MB · 중/영 이중 언어", "btn": "다운로드 →"},
            "item2": {"label": "공식 인증서", "title": "CE 인증서", "desc": "PDF · 공식 스캔 · EU 기준", "btn": "신청하기 →"}
        },
        "cta": {
            "title": "MS.30P에 관심이 있으신가요?",
            "subtitle": "가격, 맞춤 솔루션 및 데모 예약을 위해 팀에 문의하세요",
            "btnQuote": "📋 견적 받기",
            "btnWhatsapp": "💬 WhatsApp",
            "btnEmail": "✉️ 이메일 보내기"
        }
    },
    "es": {
        "badge": "Reconocimiento Oficial HKJC",
        "subtitle": "Simulador profesional de concurso completo diseñado para la competición de élite y el entrenamiento avanzado",
        "btnQuote": "Solicitar Presupuesto",
        "btnCompare": "Comparar Modelos →",
        "immersive": {
            "tag": "Característica Principal",
            "title": "Sensado Biomecánico de Alta Precisión",
            "desc": "Matrices de sensores de alta sensibilidad en la cabeza y el abdomen del caballo capturan los ajustes del peso del jinete y los comandos de ayudas en tiempo real, con respuesta dinámica en milisegundos.",
            "tags": ["Sensores de Cabeza", "Sensores Abdominales", "Retroalimentación en Tiempo Real", "Análisis Biomecánico"]
        },
        "features": {
            "title": "Características Principales",
            "subtitle": "Tecnología de nivel profesional diseñada para el entrenamiento competitivo",
            "card1": {
                "title": "Reconocimiento Inteligente de Ayudas",
                "desc": "Reconoce las ayudas de pierna interior y desencadena transiciones de marcha y cambios de velocidad precisos mediante movimiento biomecánico real, con soporte para movimientos avanzados como Piaffe y Passage.",
                "tags": ["Transición Interior", "Piaffe", "Passage", "Cambio de Marcha"]
            },
            "card2": {
                "title": "Experiencia Completa de Concurso Completo",
                "desc": "Reproduce con precisión paso, trote y galope, con soporte para movimientos avanzados de doma como Piaffe y Passage, más simulación de recorridos de salto.",
                "tags": ["Paso", "Trote", "Galope", "Piaffe", "Passage", "Salto"]
            },
            "card3": {
                "title": "Sistema de Seguridad Profesional",
                "desc": "Doble protección con freno de emergencia y protección ante fallos de software. Certificación CE (RED/EMC/LVD). Adoptado oficialmente por el Centro de Shenzhen del Hong Kong Jockey Club.",
                "tags": ["Freno de Emergencia", "Certificado CE", "Aprobado HKJC"]
            }
        },
        "video": {"title": "Demostración del Producto"},
        "specs": {
            "title": "Especificaciones Técnicas",
            "left": [
                ["Modelo", "MS.30P (Horse)"],
                ["Categoría", "Simulador Ecuestre Profesional"],
                ["Certificación", "CE (RED / EMC / LVD)"],
                ["Avalado por", "Hong Kong Jockey Club (HKJC)"],
                ["Marchas", "Paso / Trote / Galope / Piaffe / Passage"],
                ["Longitud Total", "2263mm"],
                ["Anchura Total", "1122mm"],
                ["Altura Estática", "1750mm"],
                ["Dimensiones Base", "2100×690mm"],
                ["Altura del Sillín", "1500mm"]
            ],
            "right": [
                ["Peso Total", "450KG"],
                ["Carga Nominal", "98KG"],
                ["Alimentación", "220V AC / 50Hz"],
                ["Potencia Nominal", "4.8KW"],
                ["Altura Mínima de Techo", "≥3000mm"],
                ["Espacio Lateral", "≥300mm"],
                ["Espacio Delantero/Trasero", "≥500mm"],
                ["Ancho de Puerta (montado)", "≥1222mm"],
                ["Ancho de Puerta (desmontado)", "≥800mm"],
                ["Temperatura de Trabajo", "5°C — 40°C"],
                ["Garantía", "1 Año"]
            ]
        },
        "whatIs": {
            "title": "¿Qué es el Simulador Ecuestre Profesional MS.30P?",
            "desc": "El MS.30P es un simulador ecuestre profesional diseñado para la competición de élite y el entrenamiento avanzado. Impulsado por un sistema de retroalimentación biomecánica con IA, cuenta con el respaldo oficial del Hong Kong Jockey Club (HKJC) y certificación CE (RED/EMC/LVD). Equipado con más de 200 sensores de precisión, reproduce con exactitud el paso, trote y galope, y admite movimientos avanzados de doma como Piaffe y Passage, además de simulación de recorridos de salto.",
            "stat1": "Modos de Marcha",
            "stat2": "Sensores de Precisión",
            "stat3": "Respaldo Oficial"
        },
        "faq": {
            "title": "Preguntas Frecuentes",
            "items": [
                {"q": "¿Para qué grupo de edad es adecuado el MS.30P?", "a": "El MS.30P está diseñado para jinetes mayores de 10 años, especialmente para jóvenes intermedios a avanzados y jinetes profesionales adultos. Las funciones Piaffe y Passage son ideales para los que tienen ambiciones competitivas. Para niños menores de 10 años, recomendamos el modelo educativo MS.30."},
                {"q": "¿Qué condiciones de instalación se requieren?", "a": "Altura mínima de techo ≥3000mm, suministro de energía estándar 220V/4.8KW. Dimensiones de la máquina: 2263×1122×1750mm, peso 450KG, carga nominal 98KG. Espacio lateral ≥300mm, espacio delantero/trasero ≥500mm. Ancho de puerta ≥1222mm (montado), ≥800mm (desmontado)."},
                {"q": "¿Cómo se diferencia el entrenamiento con el simulador del entrenamiento con un caballo real?", "a": "El MS.30P utiliza una plataforma de movimiento de 6 ejes y 200+ sensores para reproducir la biomecánica de un caballo real, incluidas marchas avanzadas como Piaffe y Passage. Aunque no puede replicar el carácter individual de cada caballo, ofrece condiciones de entrenamiento estables y medibles, el complemento ideal para el entrenamiento con caballos reales."},
                {"q": "¿Qué datos de entrenamiento proporciona el sistema de IA?", "a": "Tras cada sesión, se genera automáticamente un informe que incluye distribución del equilibrio de peso, puntuación de postura, evaluación de marchas Piaffe/Passage y tendencias de progreso del entrenamiento, todos exportables."},
                {"q": "¿Qué incluye el servicio posventa y la instalación?", "a": "El MS.30P incluye 1 año de garantía completa, con una instalación gratuita en las instalaciones del cliente y formación del personal. La base está equipada con ruedas giratorias para facilitar el desplazamiento en superficies planas."}
            ]
        },
        "downloads": {
            "tag": "Descargas Gratuitas",
            "title": "Obtén el Pack Completo de Recursos Horse-MS.30P",
            "item1": {"label": "Catálogo", "title": "Especificaciones Técnicas Completas", "desc": "PDF · ~8MB · Bilingüe CN/EN", "btn": "Descargar →"},
            "item2": {"label": "Certificación", "title": "Certificado CE", "desc": "PDF · Escaneado Oficial · Estándar UE", "btn": "Solicitar →"}
        },
        "cta": {
            "title": "¿Interesado en el MS.30P?",
            "subtitle": "Contacta con nuestro equipo para precios, soluciones personalizadas y una reserva de demostración",
            "btnQuote": "📋 Solicitar Presupuesto",
            "btnWhatsapp": "💬 WhatsApp",
            "btnEmail": "✉️ Enviar Email"
        }
    },
    "de": {
        "badge": "Offizielle HKJC-Anerkennung",
        "subtitle": "Professioneller Vielseitigkeitssimulator für Elitebewerb und fortgeschrittenes Training",
        "btnQuote": "Angebot anfordern",
        "btnCompare": "Modelle vergleichen →",
        "immersive": {
            "tag": "Kernfunktion",
            "title": "Hochpräzise biomechanische Sensorik",
            "desc": "Hochempfindliche Sensorarrays am Kopf und Bauch des Pferdes erfassen Gewichtsverlagerungen und Schenkelhilfen des Reiters in Echtzeit. Die Zügelzugsensorik ermöglicht dynamische Reaktionen im Millisekundenbereich.",
            "tags": ["Kopfsensoren", "Bauchsensoren", "Echtzeit-Feedback", "Biomechanikanalyse"]
        },
        "features": {
            "title": "Kernfunktionen",
            "subtitle": "Professionelle Technologie für den Wettkampfsport",
            "card1": {
                "title": "Intelligente Hilfenerkennung",
                "desc": "Erkennt innere Schenkelhilfen und löst präzise Gangartenwechsel und Geschwindigkeitsänderungen durch echte biomechanische Bewegung aus – mit Unterstützung für Piaffe, Passage und weitere Lektionen.",
                "tags": ["Innerer Wechsel", "Piaffe", "Passage", "Gangartwechsel"]
            },
            "card2": {
                "title": "Vollständige Vielseitigkeitserfahrung",
                "desc": "Präzise Reproduktion von Schritt, Trab und Galopp mit Unterstützung fortgeschrittener Dressurlektionen wie Piaffe und Passage sowie Simulation von Springparcours.",
                "tags": ["Schritt", "Trab", "Galopp", "Piaffe", "Passage", "Springen"]
            },
            "card3": {
                "title": "Professionelles Sicherheitssystem",
                "desc": "Doppelschutz durch Notbremse und Software-Fehlerabsicherung. CE (RED/EMC/LVD) zertifiziert. Offiziell eingesetzt vom Hong Kong Jockey Club Shenzhen Centre.",
                "tags": ["Notbremse", "CE-zertifiziert", "HKJC anerkannt"]
            }
        },
        "video": {"title": "Produktdemonstration"},
        "specs": {
            "title": "Technische Daten",
            "left": [
                ["Modell", "MS.30P (Horse)"],
                ["Kategorie", "Professioneller Reitsimulator"],
                ["Zertifizierung", "CE (RED / EMC / LVD)"],
                ["Anerkannt von", "Hong Kong Jockey Club (HKJC)"],
                ["Gangarten", "Schritt / Trab / Galopp / Piaffe / Passage"],
                ["Gesamtlänge", "2263mm"],
                ["Gesamtbreite", "1122mm"],
                ["Statische Höhe", "1750mm"],
                ["Basismaße", "2100×690mm"],
                ["Sattelhöhe", "1500mm"]
            ],
            "right": [
                ["Gesamtgewicht", "450KG"],
                ["Nennlast", "98KG"],
                ["Stromversorgung", "220V AC / 50Hz"],
                ["Nennleistung", "4.8KW"],
                ["Mindest-Deckenhöhe", "≥3000mm"],
                ["Seitlicher Abstand", "≥300mm"],
                ["Vorderer/hinterer Abstand", "≥500mm"],
                ["Türbreite (montiert)", "≥1222mm"],
                ["Türbreite (demontiert)", "≥800mm"],
                ["Betriebstemperatur", "5°C — 40°C"],
                ["Garantie", "1 Jahr"]
            ]
        },
        "whatIs": {
            "title": "Was ist der MS.30P Professional Equestrian Simulator?",
            "desc": "Der MS.30P ist ein professioneller Reitsimulator für Elitebewerb und fortgeschrittenes Training. Angetrieben von einem KI-Biomechanik-Feedbacksystem, offiziell anerkannt vom Hong Kong Jockey Club (HKJC) und CE (RED/EMC/LVD) zertifiziert. Ausgestattet mit 200+ Präzisionssensoren reproduziert er Schritt, Trab und Galopp sowie fortgeschrittene Dressurlektionen wie Piaffe und Passage und Springparcours-Simulation.",
            "stat1": "Gangartmodi",
            "stat2": "Präzisionssensoren",
            "stat3": "Offizielle Anerkennung"
        },
        "faq": {
            "title": "Häufig gestellte Fragen",
            "items": [
                {"q": "Für welche Altersgruppe ist der MS.30P geeignet?", "a": "Der MS.30P ist für Reiter ab 10 Jahren konzipiert, insbesondere für fortgeschrittene Jugendliche und professionelle Erwachsene. Die Piaffe- und Passage-Funktionen eignen sich ideal für wettkampforientierte Reiter. Für Kinder unter 10 Jahren empfehlen wir das Ausbildungsmodell MS.30."},
                {"q": "Welche Standortanforderungen gelten für die Installation?", "a": "Mindest-Deckenhöhe ≥3000mm, Standardstromversorgung 220V/4.8KW. Maschinenmaße: 2263×1122×1750mm, Gewicht 450KG, Nennlast 98KG. Seitlicher Abstand ≥300mm, vorderer/hinterer Abstand ≥500mm. Türbreite ≥1222mm (montiert), ≥800mm (demontiert)."},
                {"q": "Wie unterscheidet sich das Simulatortraining vom Reiten auf einem echten Pferd?", "a": "Der MS.30P verwendet eine 6-Achsen-Bewegungsplattform und 200+ Sensoren, um die Biomechanik eines echten Pferdes zu reproduzieren, einschließlich fortgeschrittener Gangarten wie Piaffe und Passage. Obwohl er den individuellen Charakter jedes Pferdes nicht replizieren kann, bietet er stabile, messbare Trainingsbedingungen – die ideale Ergänzung zum Reiten auf echten Pferden."},
                {"q": "Welche Trainingsdaten liefert das KI-System?", "a": "Nach jeder Einheit wird automatisch ein Bericht erstellt, der Gewichtsbalanceverteilung, Haltungsbewertung, Piaffe/Passage-Gangartbewertung und Trainingsfortschrittstrends enthält – alles exportierbar."},
                {"q": "Was ist im Kundendienst und in der Installation enthalten?", "a": "Der MS.30P wird mit 1 Jahr Vollgarantie geliefert, inklusive einer kostenlosen Vor-Ort-Installation und Mitarbeiterschulung. Die Basis ist mit Lenkrollen für die Bewegung auf ebenem Untergrund ausgestattet."}
            ]
        },
        "downloads": {
            "tag": "Kostenlose Downloads",
            "title": "Vollständiges Horse-MS.30P Ressourcenpaket herunterladen",
            "item1": {"label": "Produktkatalog", "title": "Vollständige technische Daten", "desc": "PDF · ~8MB · Zweisprachig CN/EN", "btn": "Herunterladen →"},
            "item2": {"label": "Zertifizierung", "title": "CE-Zertifikat", "desc": "PDF · Offizieller Scan · EU-Standard", "btn": "Anfordern →"}
        },
        "cta": {
            "title": "Interessiert am MS.30P?",
            "subtitle": "Kontaktieren Sie unser Team für Preise, maßgeschneiderte Lösungen und eine Demo-Buchung",
            "btnQuote": "📋 Angebot anfordern",
            "btnWhatsapp": "💬 WhatsApp",
            "btnEmail": "✉️ E-Mail senden"
        }
    },
    "ar": {
        "badge": "اعتماد رسمي من HKJC",
        "subtitle": "محاكي فروسية ثلاثية احترافي مصمم للمنافسة النخبوية والتدريب المتقدم",
        "btnQuote": "طلب عرض سعر",
        "btnCompare": "مقارنة الطرازات ←",
        "immersive": {
            "tag": "الميزة الأساسية",
            "title": "استشعار بيوميكانيكي عالي الدقة",
            "desc": "مصفوفات مستشعرات عالية الحساسية عند رأس الحصان وبطنه تلتقط تعديلات وزن الفارس وأوامر أعانة الساق في الوقت الفعلي، مع استجابة ديناميكية بالميلي ثانية عبر استشعار شد اللجام.",
            "tags": ["مستشعرات الرأس", "مستشعرات البطن", "ردود فعل فورية", "تحليل بيوميكانيكي"]
        },
        "features": {
            "title": "الميزات الأساسية",
            "subtitle": "تقنية على مستوى احترافي مصممة للتدريب التنافسي",
            "card1": {
                "title": "التعرف الذكي على الأعانات",
                "desc": "يتعرف على أعانات الساق الداخلية ويُطلق تحولات دقيقة في الخطى وتغييرات في السرعة من خلال حركة بيوميكانيكية حقيقية، مع دعم لحركات متقدمة كالبياف والباساج.",
                "tags": ["تحويل داخلي", "البياف", "الباساج", "تبديل الخطى"]
            },
            "card2": {
                "title": "تجربة فروسية ثلاثية متكاملة",
                "desc": "إعادة إنتاج دقيقة للمشي والترس والركض، مع دعم حركات الدريساج المتقدمة كالبياف والباساج، وكذلك محاكاة مسارات قفز الحواجز.",
                "tags": ["مشي", "ترس", "ركض", "البياف", "الباساج", "قفز الحواجز"]
            },
            "card3": {
                "title": "نظام سلامة احترافي",
                "desc": "حماية مزدوجة بفرامل الطوارئ وحماية من أعطال البرامج. معتمد CE (RED/EMC/LVD). تبناه رسمياً مركز هونغ كونغ للسباق في شنتشن.",
                "tags": ["فرامل طوارئ", "معتمد CE", "معتمد HKJC"]
            }
        },
        "video": {"title": "عرض توضيحي للمنتج"},
        "specs": {
            "title": "المواصفات التقنية",
            "left": [
                ["الطراز", "MS.30P (Horse)"],
                ["الفئة", "محاكي فروسية احترافي"],
                ["الشهادات", "CE (RED / EMC / LVD)"],
                ["مُعتمَد من", "نادي هونغ كونغ للسباق (HKJC)"],
                ["الخطى", "مشي / ترس / ركض / بياف / باساج"],
                ["الطول الكلي", "2263mm"],
                ["العرض الكلي", "1122mm"],
                ["الارتفاع الساكن", "1750mm"],
                ["أبعاد القاعدة", "2100×690mm"],
                ["ارتفاع السرج", "1500mm"]
            ],
            "right": [
                ["الوزن الكلي", "450KG"],
                ["الحمل الاسمي", "98KG"],
                ["مصدر الطاقة", "220V AC / 50Hz"],
                ["الطاقة الاسمية", "4.8KW"],
                ["الحد الأدنى لارتفاع السقف", "≥3000mm"],
                ["المسافة الجانبية", "≥300mm"],
                ["المسافة الأمامية/الخلفية", "≥500mm"],
                ["عرض الباب (مجمّع)", "≥1222mm"],
                ["عرض الباب (مفكك)", "≥800mm"],
                ["درجة حرارة التشغيل", "5°C — 40°C"],
                ["فترة الضمان", "سنة واحدة"]
            ]
        },
        "whatIs": {
            "title": "ما هو محاكي الفروسية الاحترافي MS.30P؟",
            "desc": "MS.30P محاكي فروسية احترافي مصمم للمنافسة النخبوية والتدريب المتقدم. مدعوم بنظام تغذية راجعة بيوميكانيكي بالذكاء الاصطناعي، حاصل على الاعتماد الرسمي من نادي هونغ كونغ للسباق (HKJC) وشهادة CE (RED/EMC/LVD). مجهّز بأكثر من 200 مستشعر دقيق يعيد إنتاج المشي والترس والركض بدقة، مع دعم حركات الدريساج المتقدمة وباساج وكذلك محاكاة مسارات قفز الحواجز.",
            "stat1": "أوضاع الخطى",
            "stat2": "مستشعر دقيق",
            "stat3": "اعتماد رسمي"
        },
        "faq": {
            "title": "الأسئلة الشائعة",
            "items": [
                {"q": "ما الفئة العمرية المناسبة لـ MS.30P؟", "a": "صُمِّم MS.30P للفرسان من عمر 10 سنوات فما فوق، ولا سيما المتقدمين منهم من الشباب والبالغين المحترفين. وظائف البياف والباساج مثالية للفرسان ذوي الطموحات التنافسية. للأطفال دون 10 سنوات نوصي بطراز التعليم MS.30."},
                {"q": "ما متطلبات الموقع للتثبيت؟", "a": "الحد الأدنى لارتفاع السقف ≥3000mm، مصدر طاقة 220V/4.8KW قياسي. أبعاد الجهاز: 2263×1122×1750mm، وزن 450KG، حمل اسمي 98KG. مسافة جانبية ≥300mm، مسافة أمامية/خلفية ≥500mm. عرض الباب ≥1222mm (مجمّع)، ≥800mm (مفكك)."},
                {"q": "كيف يختلف التدريب بالمحاكي عن الركوب الحقيقي؟", "a": "يستخدم MS.30P منصة حركة سداسية المحاور وأكثر من 200 مستشعر لإعادة إنتاج بيوميكانيكا الخيل الحقيقي، بما في ذلك الخطى المتقدمة كالبياف والباساج. وإن كان لا يستطيع محاكاة طابع كل حصان، فإنه يوفر ظروف تدريب ثابتة وقابلة للقياس — الرفيق المثالي للتدريب على الخيل الحقيقي."},
                {"q": "ما البيانات التدريبية التي يوفرها نظام الذكاء الاصطناعي؟", "a": "يُولَّد تقرير تلقائياً بعد كل جلسة يشمل توزيع توازن الوزن، تقييم الوضعية، تقييم خطى البياف/الباساج واتجاهات تقدم التدريب، وجميعها قابلة للتصدير."},
                {"q": "ما الذي يتضمنه خدمة ما بعد البيع والتثبيت؟", "a": "يأتي MS.30P مع ضمان كامل لمدة عام واحد، يشمل تثبيتاً مجانياً في الموقع وتدريب الموظفين مرة واحدة. القاعدة مزودة بعجلات دوارة للتنقل على الأسطح المستوية."}
            ]
        },
        "downloads": {
            "tag": "تنزيلات مجانية",
            "title": "احصل على حزمة موارد Horse-MS.30P الكاملة",
            "item1": {"label": "كتالوج المنتج", "title": "المواصفات التقنية الكاملة", "desc": "PDF · ~8MB · ثنائي اللغة صيني/إنجليزي", "btn": "تنزيل ←"},
            "item2": {"label": "الشهادات", "title": "شهادة CE", "desc": "PDF · مسح رسمي · معيار الاتحاد الأوروبي", "btn": "طلب ←"}
        },
        "cta": {
            "title": "مهتم بـ MS.30P؟",
            "subtitle": "تواصل مع فريقنا للحصول على الأسعار والحلول المخصصة وحجز عرض توضيحي",
            "btnQuote": "📋 طلب عرض سعر",
            "btnWhatsapp": "💬 واتساب",
            "btnEmail": "✉️ إرسال بريد إلكتروني"
        }
    }
}

for lang, data in MS30P.items():
    path = os.path.join(MESSAGES_DIR, f"{lang}.json")
    with open(path, 'r', encoding='utf-8') as f:
        content = json.load(f)
    content["ms30p"] = data
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
    print(f"Updated {lang}.json")

print("All done!")
