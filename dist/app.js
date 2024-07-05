"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const booking_controller_1 = require("./app/modules/booking/booking.controller");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ['http://localhost:5173'] }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// application routes
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send('Sports Facility Booking Platform!');
});
app.get('/api/check-availability', booking_controller_1.BookingControllers.checkAvailability);
// globalErrorHandler
app.use(globalErrorHandler_1.default);
// Not Found Route
app.use(notFound_1.default);
exports.default = app;
