"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function PreOrderPage() {
  const preOrderData = [
    {
      id: 1,
      name: "ENGN Pre-Workout",
      description: `🔥 EVL ENGN Судас тэлэгч — Бэлтгэлийн өмнөх энергийн хүч!
⚡ 300мг Кофеин + 3г Креатин
💥 Нэг уулт бүр нь анхаарал, хүч чадал, тэсвэрийг зэрэг нэмэгдүүлнэ
🏋️‍♂️ Тэсрэх хүч, төвлөрөл, эрчийг мэдрээрэй
🧠 L-Tyrosine, Theanine, Huperzia – тархины анхаарал, урам зоригийг дэмжинэ
🥤 Усанд амархан уусдаг, амттай формула
`,
      servings: 60,
      price: "150000",
      prepayment: "75000",
      brand: "EVLUTION NUTRITION",
      taste: "Cherry",
      photo: ["/bigengn.png", "/pre2.jpg"],
      instructions: `Бэлтгэлийн өмнө 200–250мл усанд 1 уулт уусгаж 15–30 минутын өмнө ууна. Унтахын өмнө хэрэглэж болохгүй.`,
      deliveryTime: "21 хоног",
    },
    {
      id: 2,
      name: "Nutrex Anabol Hardcore",
      description: `💪 Булчин масс нэмэх, сэргэлт сайжруулах нэмэлт тэжээл
⚡ Булчин нэмэхэд туслах анхилуун найрлага
🏋️‍♂️ Тренингийн дараах сэргэлтийг дэмжинэ
🥤 Усанд амархан уусдаг, хэрэглэхэд тохиромжтой формула
`,
      servings: 60,
      price: "100000",
      prepayment: "50000",
      brand: "Nutrex",
      taste: "Neutral / Амтгүй",
      photo: ["/anabol.jpg", "/anabol2.jpg"],
      instructions: `Өдөрт 1 капсул өглөө, 1 капсул орой хоолтой хамт ууна. 12 долоо хоногийн хэрэглээд 4 долоо хоног амралт авна.`,
      deliveryTime: "21 хоног",
    },
    {
      id: 3,
      name: "NOW Foods Sports Nutrition, Tribulus (Tribulus terrestris) 1,000 mg, Double Strength, Men's Health",
      description: `🌿 Tribulus terrestris ургамлаас гарган авсан нэмэлт
💪 Эрэгтэйчүүдийн бие махбодийн эрүүл мэндийг дэмжинэ
⚡ Эрч хүч нэмэгдүүлж, булчинд дэмжлэг үзүүлнэ
🥤 Өдөрт хэрэглэхэд тохиромжтой таблет формула
`,
      servings: 180,
      price: "140000",
      prepayment: "70000",
      brand: "NOW Foods",
      taste: "Tablet / Амтгүй",
      photo: ["/tribulus.jpg", "/tribulus2.jpg"],
      instructions: `Өдөрт 1–2 таблетийг хоолны дараа ууна. Зааврыг дагаж хэрэглэнэ үү.`,
      deliveryTime: "21 хоног",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [zoomedImage, setZoomedImage] = useState("");

  const formatPrice = (price) => {
    return new Intl.NumberFormat("mn-MN").format(price) + "₮";
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const openImageZoom = (imageSrc) => {
    setZoomedImage(imageSrc);
    setShowImageZoom(true);
  };

  const closeImageZoom = () => {
    setShowImageZoom(false);
    setZoomedImage("");
  };

  const handleOrder = () => {
    window.location.href = "tel:90162332";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Урьдчилсан захиалга
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Захиалах боломжтой бүтээгдэхүүн
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Дэлхийн шилдэг брэндүүдийн бүтээгдэхүүнүүдийг урьдчилан захиалж авах
            боломжтой
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">50% Урьдчилгаа</h3>
                <p className="text-white/90 text-sm">
                  Бүтээгдэхүүний үнийн 50%-ийг урьдчилгаа төлнө
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">18-25 хоног</h3>
                <p className="text-white/90 text-sm">
                  Монголд ирэх хугацаа (захиалгаас хойш)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">100% Баталгаатай</h3>
                <p className="text-white/90 text-sm">
                  Жинхэнэ бүтээгдэхүүн, АНУ-аас шууд
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preOrderData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 h-64">
                <Carousel className="w-full h-full">
                  <CarouselContent className="h-64">
                    {product.photo.map((photo, index) => (
                      <CarouselItem key={index} className="h-64">
                        <div className="h-full">
                          <img
                            src={photo}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {product.photo.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 text-white border-0" />
                      <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 text-white border-0" />
                    </>
                  )}
                </Carousel>

                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Урьдчилсан захиалга
                </div>
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {product.deliveryTime}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {product.brand}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Амт:</span>
                    <span className="font-medium text-slate-900">
                      {product.taste}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Уулт:</span>
                    <span className="font-medium text-slate-900">
                      {product.servings} удаагийн
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Нийт үнэ</p>
                      <p className="text-lg font-bold text-slate-900">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-1">
                        Урьдчилгаа (50%)
                      </p>
                      <p className="text-lg font-bold text-orange-600">
                        {formatPrice(product.prepayment)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(product)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Захиалах
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProduct.photo.map((photo, index) => (
                        <CarouselItem key={index}>
                          <div
                            className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden aspect-square cursor-zoom-in hover:shadow-lg transition-shadow"
                            onClick={() => openImageZoom(photo)}
                          >
                            <img
                              src={photo}
                              alt={`${selectedProduct.name} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {selectedProduct.photo.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-slate-200" />
                        <CarouselNext className="right-2 bg-white/90 hover:bg-white border-slate-200" />
                      </>
                    )}
                  </Carousel>
                </div>

                <div className="flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                        {selectedProduct.brand}
                      </span>
                      <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">
                        {selectedProduct.deliveryTime}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {selectedProduct.name}
                    </h2>

                    <p className="text-slate-600 mb-6 leading-relaxed whitespace-pre-line">
                      {selectedProduct.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-3 border-b border-slate-200">
                        <span className="text-slate-600 font-medium">Амт:</span>
                        <span className="text-slate-900 font-semibold">
                          {selectedProduct.taste}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-slate-200">
                        <span className="text-slate-600 font-medium">
                          Уулт:
                        </span>
                        <span className="text-slate-900 font-semibold">
                          {selectedProduct.servings} удаагийн
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-slate-600 mb-1">
                            Нийт үнэ
                          </p>
                          <p className="text-3xl font-bold text-slate-900">
                            {formatPrice(selectedProduct.price)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-600 mb-1">
                            Урьдчилгаа (50%)
                          </p>
                          <p className="text-3xl font-bold text-orange-600">
                            {formatPrice(selectedProduct.prepayment)}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 text-center">
                        Үлдсэн 50%-ийг бүтээгдэхүүн ирэхэд төлнө
                      </p>
                    </div>

                    {/* Usage Instructions */}
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Хэрэглэх заавар
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {selectedProduct.instructions}
                      </p>
                    </div>

                    {/* Pre-Order Information */}
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Урьдчилсан захиалга
                      </h3>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>
                            <strong>Хүргэх хугацаа:</strong>{" "}
                            {selectedProduct.deliveryTime}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>АНУ-аас шууд импортлоно</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>100% жинхэнэ бүтээгдэхүүн</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>
                            Хүргэлтийн төлбөр: 5,000₮ (хөдөө орон нутаг)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleOrder}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>90162332 дугаарт залгаад захиалах</span>
                  </button>

                  <p className="text-center text-sm text-slate-500 mt-4">
                    Урьдчилгаа төлөх заавар авна
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {showImageZoom && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={closeImageZoom}
        >
          <button
            onClick={closeImageZoom}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={zoomedImage}
              alt="Zoomed product"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
