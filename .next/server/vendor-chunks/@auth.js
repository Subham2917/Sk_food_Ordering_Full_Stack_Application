"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth";
exports.ids = ["vendor-chunks/@auth"];
exports.modules = {

/***/ "(rsc)/./node_modules/@auth/mongodb-adapter/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@auth/mongodb-adapter/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MongoDBAdapter: () => (/* binding */ MongoDBAdapter),\n/* harmony export */   _id: () => (/* binding */ _id),\n/* harmony export */   defaultCollections: () => (/* binding */ defaultCollections),\n/* harmony export */   format: () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/**\n * <div style={{display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\", padding: 16}}>\n *  <p style={{fontWeight: \"normal\"}}>Official <a href=\"https://www.mongodb.com\">MongoDB</a> adapter for Auth.js / NextAuth.js.</p>\n *  <a href=\"https://www.mongodb.com\">\n *   <img style={{display: \"block\"}} src=\"https://authjs.dev/img/adapters/mongodb.svg\" width=\"30\" />\n *  </a>\n * </div>\n *\n * ## Installation\n *\n * ```bash npm2yarn\n * npm install @auth/mongodb-adapter mongodb\n * ```\n *\n * @module @auth/mongodb-adapter\n */ \nconst defaultCollections = {\n    Users: \"users\",\n    Accounts: \"accounts\",\n    Sessions: \"sessions\",\n    VerificationTokens: \"verification_tokens\"\n};\nconst format = {\n    /** Takes a mongoDB object and returns a plain old JavaScript object */ from (object) {\n        const newObject = {};\n        for(const key in object){\n            const value = object[key];\n            if (key === \"_id\") {\n                newObject.id = value.toHexString();\n            } else if (key === \"userId\") {\n                newObject[key] = value.toHexString();\n            } else {\n                newObject[key] = value;\n            }\n        }\n        return newObject;\n    },\n    /** Takes a plain old JavaScript object and turns it into a mongoDB object */ to (object) {\n        const newObject = {\n            _id: _id(object.id)\n        };\n        for(const key in object){\n            const value = object[key];\n            if (key === \"userId\") newObject[key] = _id(value);\n            else if (key === \"id\") continue;\n            else newObject[key] = value;\n        }\n        return newObject;\n    }\n};\n/** @internal */ function _id(hex) {\n    if (hex?.length !== 24) return new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId();\n    return new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(hex);\n}\n/**\n * ## Setup\n *\n * The MongoDB adapter does not handle connections automatically, so you will have to make sure that you pass the Adapter a `MongoClient` that is connected already. Below you can see an example how to do this.\n *\n * ### Add the MongoDB client\n *\n * ```ts\n * // This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n * import { MongoClient } from \"mongodb\"\n *\n * if (!process.env.MONGODB_URI) {\n *   throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"')\n * }\n *\n * const uri = process.env.MONGODB_URI\n * const options = {}\n *\n * let client\n * let clientPromise: Promise<MongoClient>\n *\n * if (process.env.NODE_ENV === \"development\") {\n *   // In development mode, use a global variable so that the value\n *   // is preserved across module reloads caused by HMR (Hot Module Replacement).\n *   if (!global._mongoClientPromise) {\n *     client = new MongoClient(uri, options)\n *     global._mongoClientPromise = client.connect()\n *   }\n *   clientPromise = global._mongoClientPromise\n * } else {\n *   // In production mode, it's best to not use a global variable.\n *   client = new MongoClient(uri, options)\n *   clientPromise = client.connect()\n * }\n *\n * // Export a module-scoped MongoClient promise. By doing this in a\n * // separate module, the client can be shared across functions.\n * export default clientPromise\n * ```\n *\n * ### Configure Auth.js\n *\n * ```js\n * import NextAuth from \"next-auth\"\n * import { MongoDBAdapter } from \"@auth/mongodb-adapter\"\n * import clientPromise from \"../../../lib/mongodb\"\n *\n * // For more information on each option (and a full list of options) go to\n * // https://authjs.dev/reference/providers/oauth\n * export default NextAuth({\n *   adapter: MongoDBAdapter(clientPromise),\n *   ...\n * })\n * ```\n **/ function MongoDBAdapter(client, options = {}) {\n    const { collections } = options;\n    const { from, to } = format;\n    const db = (async ()=>{\n        const _db = (await client).db(options.databaseName);\n        const c = {\n            ...defaultCollections,\n            ...collections\n        };\n        return {\n            U: _db.collection(c.Users),\n            A: _db.collection(c.Accounts),\n            S: _db.collection(c.Sessions),\n            V: _db.collection(c?.VerificationTokens)\n        };\n    })();\n    return {\n        async createUser (data) {\n            const user = to(data);\n            await (await db).U.insertOne(user);\n            return from(user);\n        },\n        async getUser (id) {\n            const user = await (await db).U.findOne({\n                _id: _id(id)\n            });\n            if (!user) return null;\n            return from(user);\n        },\n        async getUserByEmail (email) {\n            const user = await (await db).U.findOne({\n                email\n            });\n            if (!user) return null;\n            return from(user);\n        },\n        async getUserByAccount (provider_providerAccountId) {\n            const account = await (await db).A.findOne(provider_providerAccountId);\n            if (!account) return null;\n            const user = await (await db).U.findOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(account.userId)\n            });\n            if (!user) return null;\n            return from(user);\n        },\n        async updateUser (data) {\n            const { _id, ...user } = to(data);\n            const result = await (await db).U.findOneAndUpdate({\n                _id\n            }, {\n                $set: user\n            }, {\n                returnDocument: \"after\"\n            });\n            return from(result);\n        },\n        async deleteUser (id) {\n            const userId = _id(id);\n            const m = await db;\n            await Promise.all([\n                m.A.deleteMany({\n                    userId: userId\n                }),\n                m.S.deleteMany({\n                    userId: userId\n                }),\n                m.U.deleteOne({\n                    _id: userId\n                })\n            ]);\n        },\n        linkAccount: async (data)=>{\n            const account = to(data);\n            await (await db).A.insertOne(account);\n            return account;\n        },\n        async unlinkAccount (provider_providerAccountId) {\n            const account = await (await db).A.findOneAndDelete(provider_providerAccountId);\n            return from(account);\n        },\n        async getSessionAndUser (sessionToken) {\n            const session = await (await db).S.findOne({\n                sessionToken\n            });\n            if (!session) return null;\n            const user = await (await db).U.findOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(session.userId)\n            });\n            if (!user) return null;\n            return {\n                user: from(user),\n                session: from(session)\n            };\n        },\n        async createSession (data) {\n            const session = to(data);\n            await (await db).S.insertOne(session);\n            return from(session);\n        },\n        async updateSession (data) {\n            const { _id, ...session } = to(data);\n            const updatedSession = await (await db).S.findOneAndUpdate({\n                sessionToken: session.sessionToken\n            }, {\n                $set: session\n            }, {\n                returnDocument: \"after\"\n            });\n            return from(updatedSession);\n        },\n        async deleteSession (sessionToken) {\n            const session = await (await db).S.findOneAndDelete({\n                sessionToken\n            });\n            return from(session);\n        },\n        async createVerificationToken (data) {\n            await (await db).V.insertOne(to(data));\n            return data;\n        },\n        async useVerificationToken (identifier_token) {\n            const verificationToken = await (await db).V.findOneAndDelete(identifier_token);\n            if (!verificationToken) return null;\n            const { _id, ...rest } = verificationToken;\n            return rest;\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGF1dGgvbW9uZ29kYi1hZGFwdGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBQ2tDO0FBQzVCLE1BQU1DLHFCQUFxQjtJQUM5QkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsb0JBQW9CO0FBQ3hCLEVBQUU7QUFDSyxNQUFNQyxTQUFTO0lBQ2xCLHFFQUFxRSxHQUNyRUMsTUFBS0MsTUFBTTtRQUNQLE1BQU1DLFlBQVksQ0FBQztRQUNuQixJQUFLLE1BQU1DLE9BQU9GLE9BQVE7WUFDdEIsTUFBTUcsUUFBUUgsTUFBTSxDQUFDRSxJQUFJO1lBQ3pCLElBQUlBLFFBQVEsT0FBTztnQkFDZkQsVUFBVUcsRUFBRSxHQUFHRCxNQUFNRSxXQUFXO1lBQ3BDLE9BQ0ssSUFBSUgsUUFBUSxVQUFVO2dCQUN2QkQsU0FBUyxDQUFDQyxJQUFJLEdBQUdDLE1BQU1FLFdBQVc7WUFDdEMsT0FDSztnQkFDREosU0FBUyxDQUFDQyxJQUFJLEdBQUdDO1lBQ3JCO1FBQ0o7UUFDQSxPQUFPRjtJQUNYO0lBQ0EsMkVBQTJFLEdBQzNFSyxJQUFHTixNQUFNO1FBQ0wsTUFBTUMsWUFBWTtZQUNkTSxLQUFLQSxJQUFJUCxPQUFPSSxFQUFFO1FBQ3RCO1FBQ0EsSUFBSyxNQUFNRixPQUFPRixPQUFRO1lBQ3RCLE1BQU1HLFFBQVFILE1BQU0sQ0FBQ0UsSUFBSTtZQUN6QixJQUFJQSxRQUFRLFVBQ1JELFNBQVMsQ0FBQ0MsSUFBSSxHQUFHSyxJQUFJSjtpQkFDcEIsSUFBSUQsUUFBUSxNQUNiO2lCQUVBRCxTQUFTLENBQUNDLElBQUksR0FBR0M7UUFDekI7UUFDQSxPQUFPRjtJQUNYO0FBQ0osRUFBRTtBQUNGLGNBQWMsR0FDUCxTQUFTTSxJQUFJQyxHQUFHO0lBQ25CLElBQUlBLEtBQUtDLFdBQVcsSUFDaEIsT0FBTyxJQUFJakIsNkNBQVFBO0lBQ3ZCLE9BQU8sSUFBSUEsNkNB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QUFFWixnQkFBZ0I7WUFBUTtZQUNoSixPQUFPeEMsS0FBS3VEO1FBQ2hCO1FBQ0EsTUFBTUMsZUFBY0wsWUFBWTtZQUM1QixNQUFNQyxVQUFVLE1BQU0sQ0FBQyxNQUFNckMsRUFBQyxFQUFHTyxDQUFDLENBQUMyQixnQkFBZ0IsQ0FBQztnQkFDaERFO1lBQ0o7WUFDQSxPQUFPbkQsS0FBS29EO1FBQ2hCO1FBQ0EsTUFBTUsseUJBQXdCaEMsSUFBSTtZQUM5QixNQUFNLENBQUMsTUFBTVYsRUFBQyxFQUFHUSxDQUFDLENBQUNJLFNBQVMsQ0FBQ3BCLEdBQUdrQjtZQUNoQyxPQUFPQTtRQUNYO1FBQ0EsTUFBTWlDLHNCQUFxQkMsZ0JBQWdCO1lBQ3ZDLE1BQU1DLG9CQUFvQixNQUFNLENBQUMsTUFBTTdDLEVBQUMsRUFBR1EsQ0FBQyxDQUFDMEIsZ0JBQWdCLENBQUNVO1lBQzlELElBQUksQ0FBQ0MsbUJBQ0QsT0FBTztZQUNYLE1BQU0sRUFBRXBELEdBQUcsRUFBRSxHQUFHcUQsTUFBTSxHQUFHRDtZQUN6QixPQUFPQztRQUNYO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RfZGVsaXZlcnkvLi9ub2RlX21vZHVsZXMvQGF1dGgvbW9uZ29kYi1hZGFwdGVyL2luZGV4LmpzP2ZmMzQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcGFkZGluZzogMTZ9fT5cbiAqICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwibm9ybWFsXCJ9fT5PZmZpY2lhbCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubW9uZ29kYi5jb21cIj5Nb25nb0RCPC9hPiBhZGFwdGVyIGZvciBBdXRoLmpzIC8gTmV4dEF1dGguanMuPC9wPlxuICogIDxhIGhyZWY9XCJodHRwczovL3d3dy5tb25nb2RiLmNvbVwiPlxuICogICA8aW1nIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wifX0gc3JjPVwiaHR0cHM6Ly9hdXRoanMuZGV2L2ltZy9hZGFwdGVycy9tb25nb2RiLnN2Z1wiIHdpZHRoPVwiMzBcIiAvPlxuICogIDwvYT5cbiAqIDwvZGl2PlxuICpcbiAqICMjIEluc3RhbGxhdGlvblxuICpcbiAqIGBgYGJhc2ggbnBtMnlhcm5cbiAqIG5wbSBpbnN0YWxsIEBhdXRoL21vbmdvZGItYWRhcHRlciBtb25nb2RiXG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIEBhdXRoL21vbmdvZGItYWRhcHRlclxuICovXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbGxlY3Rpb25zID0ge1xuICAgIFVzZXJzOiBcInVzZXJzXCIsXG4gICAgQWNjb3VudHM6IFwiYWNjb3VudHNcIixcbiAgICBTZXNzaW9uczogXCJzZXNzaW9uc1wiLFxuICAgIFZlcmlmaWNhdGlvblRva2VuczogXCJ2ZXJpZmljYXRpb25fdG9rZW5zXCIsXG59O1xuZXhwb3J0IGNvbnN0IGZvcm1hdCA9IHtcbiAgICAvKiogVGFrZXMgYSBtb25nb0RCIG9iamVjdCBhbmQgcmV0dXJucyBhIHBsYWluIG9sZCBKYXZhU2NyaXB0IG9iamVjdCAqL1xuICAgIGZyb20ob2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcIl9pZFwiKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0LmlkID0gdmFsdWUudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJ1c2VySWRcIikge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gdmFsdWUudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIC8qKiBUYWtlcyBhIHBsYWluIG9sZCBKYXZhU2NyaXB0IG9iamVjdCBhbmQgdHVybnMgaXQgaW50byBhIG1vbmdvREIgb2JqZWN0ICovXG4gICAgdG8ob2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IHtcbiAgICAgICAgICAgIF9pZDogX2lkKG9iamVjdC5pZCksXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwidXNlcklkXCIpXG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBfaWQodmFsdWUpO1xuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcImlkXCIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG59O1xuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9pZChoZXgpIHtcbiAgICBpZiAoaGV4Py5sZW5ndGggIT09IDI0KVxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdElkKCk7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RJZChoZXgpO1xufVxuLyoqXG4gKiAjIyBTZXR1cFxuICpcbiAqIFRoZSBNb25nb0RCIGFkYXB0ZXIgZG9lcyBub3QgaGFuZGxlIGNvbm5lY3Rpb25zIGF1dG9tYXRpY2FsbHksIHNvIHlvdSB3aWxsIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgeW91IHBhc3MgdGhlIEFkYXB0ZXIgYSBgTW9uZ29DbGllbnRgIHRoYXQgaXMgY29ubmVjdGVkIGFscmVhZHkuIEJlbG93IHlvdSBjYW4gc2VlIGFuIGV4YW1wbGUgaG93IHRvIGRvIHRoaXMuXG4gKlxuICogIyMjIEFkZCB0aGUgTW9uZ29EQiBjbGllbnRcbiAqXG4gKiBgYGB0c1xuICogLy8gVGhpcyBhcHByb2FjaCBpcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy93aXRoLW1vbmdvZGJcbiAqIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxuICpcbiAqIGlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAqICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG4gKiB9XG4gKlxuICogY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcbiAqIGNvbnN0IG9wdGlvbnMgPSB7fVxuICpcbiAqIGxldCBjbGllbnRcbiAqIGxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PlxuICpcbiAqIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gKiAgIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICogICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICogICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gKiAgICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAqICAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAqICAgfVxuICogICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcbiAqIH0gZWxzZSB7XG4gKiAgIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gKiAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gKiAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gKiB9XG4gKlxuICogLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbiAqIC8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG4gKiBleHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXG4gKiBgYGBcbiAqXG4gKiAjIyMgQ29uZmlndXJlIEF1dGguanNcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuICogaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCJcbiAqIGltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiXG4gKlxuICogLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZWFjaCBvcHRpb24gKGFuZCBhIGZ1bGwgbGlzdCBvZiBvcHRpb25zKSBnbyB0b1xuICogLy8gaHR0cHM6Ly9hdXRoanMuZGV2L3JlZmVyZW5jZS9wcm92aWRlcnMvb2F1dGhcbiAqIGV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAqICAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXG4gKiAgIC4uLlxuICogfSlcbiAqIGBgYFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIE1vbmdvREJBZGFwdGVyKGNsaWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSBmb3JtYXQ7XG4gICAgY29uc3QgZGIgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBfZGIgPSAoYXdhaXQgY2xpZW50KS5kYihvcHRpb25zLmRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGNvbnN0IGMgPSB7IC4uLmRlZmF1bHRDb2xsZWN0aW9ucywgLi4uY29sbGVjdGlvbnMgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFU6IF9kYi5jb2xsZWN0aW9uKGMuVXNlcnMpLFxuICAgICAgICAgICAgQTogX2RiLmNvbGxlY3Rpb24oYy5BY2NvdW50cyksXG4gICAgICAgICAgICBTOiBfZGIuY29sbGVjdGlvbihjLlNlc3Npb25zKSxcbiAgICAgICAgICAgIFY6IF9kYi5jb2xsZWN0aW9uKGM/LlZlcmlmaWNhdGlvblRva2VucyksXG4gICAgICAgIH07XG4gICAgfSkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhc3luYyBjcmVhdGVVc2VyKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0byhkYXRhKTtcbiAgICAgICAgICAgIGF3YWl0IChhd2FpdCBkYikuVS5pbnNlcnRPbmUodXNlcik7XG4gICAgICAgICAgICByZXR1cm4gZnJvbSh1c2VyKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0VXNlcihpZCkge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IChhd2FpdCBkYikuVS5maW5kT25lKHsgX2lkOiBfaWQoaWQpIH0pO1xuICAgICAgICAgICAgaWYgKCF1c2VyKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20odXNlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldFVzZXJCeUVtYWlsKGVtYWlsKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgKGF3YWl0IGRiKS5VLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICAgICAgICAgIGlmICghdXNlcilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHVzZXIpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRVc2VyQnlBY2NvdW50KHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgKGF3YWl0IGRiKS5BLmZpbmRPbmUocHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQpO1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50KVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IChhd2FpdCBkYikuVS5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQoYWNjb3VudC51c2VySWQpIH0pO1xuICAgICAgICAgICAgaWYgKCF1c2VyKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20odXNlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVwZGF0ZVVzZXIoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgeyBfaWQsIC4uLnVzZXIgfSA9IHRvKGRhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGF3YWl0IGRiKS5VLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQgfSwgeyAkc2V0OiB1c2VyIH0sIHsgcmV0dXJuRG9jdW1lbnQ6IFwiYWZ0ZXJcIiB9KTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGRlbGV0ZVVzZXIoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IF9pZChpZCk7XG4gICAgICAgICAgICBjb25zdCBtID0gYXdhaXQgZGI7XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgbS5BLmRlbGV0ZU1hbnkoeyB1c2VySWQ6IHVzZXJJZCB9KSxcbiAgICAgICAgICAgICAgICBtLlMuZGVsZXRlTWFueSh7IHVzZXJJZDogdXNlcklkIH0pLFxuICAgICAgICAgICAgICAgIG0uVS5kZWxldGVPbmUoeyBfaWQ6IHVzZXJJZCB9KSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9LFxuICAgICAgICBsaW5rQWNjb3VudDogYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSB0byhkYXRhKTtcbiAgICAgICAgICAgIGF3YWl0IChhd2FpdCBkYikuQS5pbnNlcnRPbmUoYWNjb3VudCk7XG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdW5saW5rQWNjb3VudChwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IChhd2FpdCBkYikuQS5maW5kT25lQW5kRGVsZXRlKHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKGFjY291bnQpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRTZXNzaW9uQW5kVXNlcihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCAoYXdhaXQgZGIpLlMuZmluZE9uZSh7IHNlc3Npb25Ub2tlbiB9KTtcbiAgICAgICAgICAgIGlmICghc2Vzc2lvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCAoYXdhaXQgZGIpLlUuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElkKHNlc3Npb24udXNlcklkKSB9KTtcbiAgICAgICAgICAgIGlmICghdXNlcilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcjogZnJvbSh1c2VyKSxcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBmcm9tKHNlc3Npb24pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlU2Vzc2lvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gdG8oZGF0YSk7XG4gICAgICAgICAgICBhd2FpdCAoYXdhaXQgZGIpLlMuaW5zZXJ0T25lKHNlc3Npb24pO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20oc2Vzc2lvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVwZGF0ZVNlc3Npb24oZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgeyBfaWQsIC4uLnNlc3Npb24gfSA9IHRvKGRhdGEpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNlc3Npb24gPSBhd2FpdCAoYXdhaXQgZGIpLlMuZmluZE9uZUFuZFVwZGF0ZSh7IHNlc3Npb25Ub2tlbjogc2Vzc2lvbi5zZXNzaW9uVG9rZW4gfSwgeyAkc2V0OiBzZXNzaW9uIH0sIHsgcmV0dXJuRG9jdW1lbnQ6IFwiYWZ0ZXJcIiB9KTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHVwZGF0ZWRTZXNzaW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZGVsZXRlU2Vzc2lvbihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCAoYXdhaXQgZGIpLlMuZmluZE9uZUFuZERlbGV0ZSh7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblRva2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShzZXNzaW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4oZGF0YSkge1xuICAgICAgICAgICAgYXdhaXQgKGF3YWl0IGRiKS5WLmluc2VydE9uZSh0byhkYXRhKSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXNlVmVyaWZpY2F0aW9uVG9rZW4oaWRlbnRpZmllcl90b2tlbikge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBhd2FpdCAoYXdhaXQgZGIpLlYuZmluZE9uZUFuZERlbGV0ZShpZGVudGlmaWVyX3Rva2VuKTtcbiAgICAgICAgICAgIGlmICghdmVyaWZpY2F0aW9uVG9rZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCB7IF9pZCwgLi4ucmVzdCB9ID0gdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgICAgICAgICByZXR1cm4gcmVzdDtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbIk9iamVjdElkIiwiZGVmYXVsdENvbGxlY3Rpb25zIiwiVXNlcnMiLCJBY2NvdW50cyIsIlNlc3Npb25zIiwiVmVyaWZpY2F0aW9uVG9rZW5zIiwiZm9ybWF0IiwiZnJvbSIsIm9iamVjdCIsIm5ld09iamVjdCIsImtleSIsInZhbHVlIiwiaWQiLCJ0b0hleFN0cmluZyIsInRvIiwiX2lkIiwiaGV4IiwibGVuZ3RoIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnQiLCJvcHRpb25zIiwiY29sbGVjdGlvbnMiLCJkYiIsIl9kYiIsImRhdGFiYXNlTmFtZSIsImMiLCJVIiwiY29sbGVjdGlvbiIsIkEiLCJTIiwiViIsImNyZWF0ZVVzZXIiLCJkYXRhIiwidXNlciIsImluc2VydE9uZSIsImdldFVzZXIiLCJmaW5kT25lIiwiZ2V0VXNlckJ5RW1haWwiLCJlbWFpbCIsImdldFVzZXJCeUFjY291bnQiLCJwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCIsImFjY291bnQiLCJ1c2VySWQiLCJ1cGRhdGVVc2VyIiwicmVzdWx0IiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRzZXQiLCJyZXR1cm5Eb2N1bWVudCIsImRlbGV0ZVVzZXIiLCJtIiwiUHJvbWlzZSIsImFsbCIsImRlbGV0ZU1hbnkiLCJkZWxldGVPbmUiLCJsaW5rQWNjb3VudCIsInVubGlua0FjY291bnQiLCJmaW5kT25lQW5kRGVsZXRlIiwiZ2V0U2Vzc2lvbkFuZFVzZXIiLCJzZXNzaW9uVG9rZW4iLCJzZXNzaW9uIiwiY3JlYXRlU2Vzc2lvbiIsInVwZGF0ZVNlc3Npb24iLCJ1cGRhdGVkU2Vzc2lvbiIsImRlbGV0ZVNlc3Npb24iLCJjcmVhdGVWZXJpZmljYXRpb25Ub2tlbiIsInVzZVZlcmlmaWNhdGlvblRva2VuIiwiaWRlbnRpZmllcl90b2tlbiIsInZlcmlmaWNhdGlvblRva2VuIiwicmVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@auth/mongodb-adapter/index.js\n");

/***/ })

};
;