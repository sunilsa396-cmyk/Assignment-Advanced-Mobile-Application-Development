import Foundation
import EventKit

@objc(CalendarModule)
class CalendarModule: RCTEventEmitter {
  private let store = EKEventStore()

  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
  func requestAccess(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    store.requestAccess(to: .event) { (granted, error) in
      if let err = error {
        reject("error", err.localizedDescription, err)
        return
      }
      resolve(granted)
    }
  }

  @objc
  func createReminder(_ title: NSString, dateIso: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    let event = EKEvent(eventStore: store)
    event.title = title as String
    if let date = ISO8601DateFormatter().date(from: dateIso as String) {
      event.startDate = date
      event.endDate = date.addingTimeInterval(60*30)
    }
    event.calendar = store.defaultCalendarForNewEvents
    do {
      try store.save(event, span: .thisEvent)
      resolve(["id": event.eventIdentifier ?? ""])
    } catch {
      reject("error", error.localizedDescription, error)
    }
  }

  @objc
  override func supportedEvents() -> [String]! {
    return ["onCalendarChange"]
  }
}
